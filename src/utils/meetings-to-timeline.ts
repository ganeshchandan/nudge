import type { Meeting } from "@services/meetings";
import type { TimelineSegment, TimelineEvent } from "@components/common/lifecycle/types";

/**
 * Parses a date string in format "Dec 10, 2025 01:24 PM" to a Date object
 */
const parseMeetingDate = (dateString: string): Date => {
  // Handle format: "Dec 10, 2025 01:24 PM"
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    // Fallback: try parsing as ISO string
    return new Date(dateString);
  }
  return date;
};

/**
 * Determines segment color based on meeting feedback or status
 * Great relationship → green, Good relationship → purple, Bad relationship → red, Neutral → green
 */
const getSegmentColor = (meeting: Meeting): TimelineSegment["color"] => {
  // Great relationship
  if (meeting.feedback === "great") {
    return "green";
  }
  // Good relationship
  if (meeting.feedback === "good") {
    return "purple";
  }
  // Bad relationship
  if (meeting.feedback === "bad" || meeting.feedback === "poor" || meeting.status === "cancelled") {
    return "red";
  }
  // Neutral (default) - default to green
  return "green";
};

/**
 * Groups consecutive meetings into segments that extend continuously
 * Segments change color when relationship status changes
 */
const createSegmentsFromMeetings = (
  meetings: Meeting[]
): TimelineSegment[] => {
  if (meetings.length === 0) return [];

  const segments: TimelineSegment[] = [];
  const sortedMeetings = [...meetings].sort((a, b) => {
    const dateA = parseMeetingDate(a.start_time);
    const dateB = parseMeetingDate(b.start_time);
    return dateA.getTime() - dateB.getTime();
  });

  let currentSegmentStart = parseMeetingDate(sortedMeetings[0].start_time);
  let currentSegmentColor = getSegmentColor(sortedMeetings[0]);
  let segmentId = 1;

  for (let i = 1; i < sortedMeetings.length; i++) {
    const meeting = sortedMeetings[i];
    const meetingDate = parseMeetingDate(meeting.start_time);
    const meetingColor = getSegmentColor(meeting);

    // If color changed, close previous segment and start new one
    if (meetingColor !== currentSegmentColor) {
      // Close previous segment at the start of this meeting
      segments.push({
        id: String(segmentId++),
        startDate: currentSegmentStart,
        endDate: meetingDate,
        color: currentSegmentColor,
      });

      // Start new segment
      currentSegmentStart = meetingDate;
      currentSegmentColor = meetingColor;
    }
  }

  // Close the last segment - extend to the end of the last meeting
  const lastMeeting = sortedMeetings[sortedMeetings.length - 1];
  const lastMeetingDate = parseMeetingDate(lastMeeting.start_time);
  const lastMeetingEndDate = new Date(
    lastMeetingDate.getTime() + lastMeeting.duration * 60 * 1000
  );

  segments.push({
    id: String(segmentId++),
    startDate: currentSegmentStart,
    endDate: lastMeetingEndDate,
    color: currentSegmentColor,
  });

  return segments;
};

/**
 * Creates timeline events from meetings
 */
const createEventsFromMeetings = (meetings: Meeting[]): TimelineEvent[] => {
  const events: TimelineEvent[] = [];
  
  if (meetings.length === 0) return events;

  // Group meetings by feedback type AND month (timeline period)
  // Include all meetings (escalations, recovery, okr, regular) in the grouping
  const meetingsByFeedbackAndMonth = new Map<string, Meeting[]>();
  const escalations: Meeting[] = [];
  const recoveryMeetings: Meeting[] = [];
  const okrMeetings: Meeting[] = [];
  const regularMeetings: Meeting[] = [];

  meetings.forEach((meeting) => {
    const meetingDate = parseMeetingDate(meeting.start_time);
    const monthKey = `${meetingDate.getFullYear()}-${meetingDate.getMonth()}`;
    
    // Group ALL meetings by feedback type AND month (including escalations, recovery, etc.)
    const feedbackKey = meeting.feedback || "none";
    const combinedKey = `${feedbackKey}-${monthKey}`;
    if (!meetingsByFeedbackAndMonth.has(combinedKey)) {
      meetingsByFeedbackAndMonth.set(combinedKey, []);
    }
    meetingsByFeedbackAndMonth.get(combinedKey)!.push(meeting);
    
    // Also categorize for other event types (escalations, recovery, okr)
    const notesLower = (meeting.meeting_notes || "").toLowerCase();
    const topicLower = (meeting.topic || "").toLowerCase();
    const meetingTypeLower = (meeting.meeting_type || "").toLowerCase();
    
    if (notesLower.includes("escalation") || topicLower.includes("escalation") || meetingTypeLower.includes("escalation")) {
      escalations.push(meeting);
    } else if (notesLower.includes("recovery") || topicLower.includes("recovery")) {
      recoveryMeetings.push(meeting);
    } else if (topicLower.includes("okr")) {
      okrMeetings.push(meeting);
    } else {
      regularMeetings.push(meeting);
    }
  });

  // Create "Meetings Logged" as separate pill and participant names as separate list pill
  // Group by feedback type AND month, position based on feedback: "great" -> above, "good" -> middle, others -> below
  meetingsByFeedbackAndMonth.forEach((feedbackMonthMeetings, combinedKey) => {
    if (feedbackMonthMeetings.length > 0) {
      // Extract feedback and month from combined key (format: "feedback-year-month")
      const parts = combinedKey.split('-');
      const feedbackKey = parts[0];
      const year = parseInt(parts[1]);
      const month = parseInt(parts[2]);
      
      // Position pills at the middle of the month (15th day) to center them between months
      const monthMiddleDate = new Date(year, month, 15);
      
      const uniqueParticipants = Array.from(new Set(feedbackMonthMeetings.flatMap(m => m.participants || [])));
      
      // Determine position based on feedback type
      let position: TimelineEvent["position"] = "below"; // Default
      if (feedbackKey === "great") {
        position = "above";
      } else if (feedbackKey === "good") {
        position = "middle";
      } else if (feedbackKey === "bad" || feedbackKey === "poor") {
        position = "below";
      } else {
        position = "below"; // Default to below for other/no feedback
      }
      
      // Create participant names list as separate pill (same position) - FIRST
      if (uniqueParticipants.length > 0) {
        events.push({
          id: `meetings-logged-${combinedKey}-participants`,
          date: monthMiddleDate,
          type: "meeting",
          label: "", // Empty label, only show participant names
          position: position,
          participants: uniqueParticipants.slice(0, 5),
          showParticipantNames: true, // Show names as a list
          icon: uniqueParticipants.length > 1 ? "headphone" : undefined,
        });
      }

      // Create "Meetings Logged" as separate pill - SECOND
      events.push({
        id: `meetings-logged-${combinedKey}`,
        date: monthMiddleDate,
        type: "meetings-logged",
        label: "Meetings Logged",
        count: feedbackMonthMeetings.length,
        position: position,
        showCountLabel: true,
      });
    }
  });

  // Create escalation aggregate event
  if (escalations.length > 0) {
    const sortedEscalations = [...escalations].sort((a, b) => {
      const dateA = parseMeetingDate(a.start_time);
      const dateB = parseMeetingDate(b.start_time);
      return dateA.getTime() - dateB.getTime();
    });
    const firstEscalation = sortedEscalations[0];
    const escalationDate = parseMeetingDate(firstEscalation.start_time);
    
    events.push({
      id: "escalations-aggregate",
      date: escalationDate,
      type: "escalation",
      label: "Escalations",
      count: escalations.length,
      position: "below",
      showCountLabel: true,
    });
  }

  // Create individual recovery events (on timeline)
  recoveryMeetings.forEach((meeting) => {
    const meetingDate = parseMeetingDate(meeting.start_time);
    events.push({
      id: `recovery-${meeting._id}`,
      date: meetingDate,
      type: "recovery",
      label: "Recovery Lineage",
      position: "middle",
      icon: "grid",
    });
  });


  // Create individual meeting events for regular meetings with participants
  regularMeetings.forEach((meeting) => {
    const meetingDate = parseMeetingDate(meeting.start_time);
    const participants = meeting.participants || [];
    
    // Determine position based on feedback
    const position: TimelineEvent["position"] =
      meeting.feedback === "great"
        ? "above"
        : meeting.feedback === "good"
        ? "middle"
        : "below";

    // Only create event if there are participants
    if (participants.length > 0) {
      // Get unique participant names for this meeting
      const uniqueParticipants = Array.from(new Set(participants));
      
      events.push({
        id: `meeting-${meeting._id}`,
        date: meetingDate,
        type: "meeting",
        label: uniqueParticipants[0] || "Meeting",
        position,
        participants: uniqueParticipants.slice(0, 2),
        showParticipantNames: uniqueParticipants.length === 1, // Only show names if single participant
        icon: uniqueParticipants.length > 1 ? "headphone" : undefined,
      });
    }
  });

  // Sort events by date
  return events.sort((a, b) => a.date.getTime() - b.date.getTime());
};

/**
 * Transforms meetings API data into timeline format
 */
export const transformMeetingsToTimeline = (
  meetings: Meeting[]
): {
  segments: TimelineSegment[];
  events: TimelineEvent[];
  startDate: Date;
  endDate: Date;
} => {
  if (meetings.length === 0) {
    const now = new Date();
    return {
      segments: [],
      events: [],
      startDate: new Date(now.getFullYear(), now.getMonth() - 1, 1),
      endDate: new Date(now.getFullYear(), now.getMonth() + 1, 1),
    };
  }

  const sortedMeetings = [...meetings].sort((a, b) => {
    const dateA = parseMeetingDate(a.start_time);
    const dateB = parseMeetingDate(b.start_time);
    return dateA.getTime() - dateB.getTime();
  });

  const firstMeeting = sortedMeetings[0];
  const lastMeeting = sortedMeetings[sortedMeetings.length - 1];

  const startDate = parseMeetingDate(firstMeeting.start_time);
  const lastMeetingDate = parseMeetingDate(lastMeeting.start_time);
  const lastMeetingEndDate = new Date(
    lastMeetingDate.getTime() + lastMeeting.duration * 60 * 1000
  );
  const endDate = lastMeetingEndDate;

  // Set start date to the first day of the month containing the first meeting
  const adjustedStartDate = new Date(startDate);
  adjustedStartDate.setDate(1); // First day of the month
  adjustedStartDate.setHours(0, 0, 0, 0);

  // Set end date to the last day of the month containing the last meeting
  const adjustedEndDate = new Date(endDate);
  adjustedEndDate.setMonth(adjustedEndDate.getMonth() + 1);
  adjustedEndDate.setDate(0); // Last day of the month
  adjustedEndDate.setHours(23, 59, 59, 999);

  const segments = createSegmentsFromMeetings(sortedMeetings);
  const events = createEventsFromMeetings(sortedMeetings);

  return {
    segments,
    events,
    startDate: adjustedStartDate,
    endDate: adjustedEndDate,
  };
};

