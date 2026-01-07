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
 */
const getSegmentColor = (meeting: Meeting): TimelineSegment["color"] => {
  if (meeting.feedback === "great" || meeting.feedback === "good") {
    return "green";
  }
  if (meeting.status === "completed") {
    return "blue";
  }
  if (meeting.status === "cancelled") {
    return "red";
  }
  return "purple";
};

/**
 * Groups consecutive meetings into segments
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

  for (let i = 0; i < sortedMeetings.length; i++) {
    const meeting = sortedMeetings[i];
    const meetingDate = parseMeetingDate(meeting.start_time);
    const meetingColor = getSegmentColor(meeting);
    const meetingEndDate = new Date(
      meetingDate.getTime() + meeting.duration * 60 * 1000
    );

    // If this meeting is more than 7 days away from current segment or color changed, start new segment
    const daysDiff =
      (meetingDate.getTime() - currentSegmentStart.getTime()) /
      (1000 * 60 * 60 * 24);

    if (i === 0 || daysDiff > 7 || meetingColor !== currentSegmentColor) {
      // Close previous segment if exists
      if (i > 0) {
        const prevMeeting = sortedMeetings[i - 1];
        const prevEndDate = new Date(
          parseMeetingDate(prevMeeting.start_time).getTime() +
            prevMeeting.duration * 60 * 1000
        );
        segments.push({
          id: String(segmentId++),
          startDate: currentSegmentStart,
          endDate: prevEndDate,
          color: currentSegmentColor,
        });
      }

      // Start new segment
      currentSegmentStart = meetingDate;
      currentSegmentColor = meetingColor;
    }

    // If this is the last meeting, close the segment
    if (i === sortedMeetings.length - 1) {
      segments.push({
        id: String(segmentId++),
        startDate: currentSegmentStart,
        endDate: meetingEndDate,
        color: currentSegmentColor,
      });
    }
  }

  return segments.length > 0 ? segments : [
    {
      id: "1",
      startDate: currentSegmentStart,
      endDate: new Date(
        currentSegmentStart.getTime() + sortedMeetings[0].duration * 60 * 1000
      ),
      color: currentSegmentColor,
    },
  ];
};

/**
 * Creates timeline events from meetings
 */
const createEventsFromMeetings = (meetings: Meeting[]): TimelineEvent[] => {
  return meetings.map((meeting) => {
    const meetingDate = parseMeetingDate(meeting.start_time);
    
    // Determine event type based on meeting properties
    let eventType: TimelineEvent["type"] = "meeting";
    if (meeting.meeting_notes?.toLowerCase().includes("escalation")) {
      eventType = "escalation";
    } else if (meeting.meeting_notes?.toLowerCase().includes("recovery")) {
      eventType = "recovery";
    } else if (meeting.topic.toLowerCase().includes("okr")) {
      eventType = "okr";
    }

    // Determine position based on feedback:
    // "great" → above (top section)
    // "good" → middle (on timeline)
    // anything else → below (bottom section)
    const position: TimelineEvent["position"] =
      meeting.feedback === "great"
        ? "above"
        : meeting.feedback === "good"
        ? "middle"
        : "below";

    // Count participants for label
    const participantCount = meeting.participants?.length || 0;

    return {
      id: meeting._id,
      date: meetingDate,
      type: eventType,
      label: meeting.topic || "Meeting",
      count: participantCount > 1 ? participantCount : undefined,
      position,
      // You can add profile images if available
      // profileImages: meeting.participants?.slice(0, 3).map(...),
    };
  });
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

  // Extend date range by 30 days on each side for better visualization
  const extendedStartDate = new Date(startDate);
  extendedStartDate.setDate(extendedStartDate.getDate() - 30);
  
  const extendedEndDate = new Date(endDate);
  extendedEndDate.setDate(extendedEndDate.getDate() + 30);

  const segments = createSegmentsFromMeetings(sortedMeetings);
  const events = createEventsFromMeetings(sortedMeetings);

  return {
    segments,
    events,
    startDate: extendedStartDate,
    endDate: extendedEndDate,
  };
};

