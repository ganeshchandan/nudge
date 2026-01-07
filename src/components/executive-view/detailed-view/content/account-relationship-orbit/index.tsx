import { useEffect, useState, type FC } from "react";
import "@components/executive-view/detailed-view/content/account-relationship-orbit/index.scss";
import { EditIcon, ExpandIcon } from "@assets/images";
import { Lifecycle } from "@components/common/lifecycle";
import type {
  TimelineSegment,
  TimelineEvent,
} from "@components/common/lifecycle/types";
import { fetchMeetings } from "@services/meetings";
import { transformMeetingsToTimeline } from "@utils/meetings-to-timeline";

interface AccountRelationshipOrbitProps {}

export const AccountRelationshipOrbit: FC<
  AccountRelationshipOrbitProps
> = () => {
  const [segments, setSegments] = useState<TimelineSegment[]>([]);
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMeetings = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchMeetings();
        const timelineData = transformMeetingsToTimeline(response.meetings);
        setSegments(timelineData.segments);
        setEvents(timelineData.events);
        setStartDate(timelineData.startDate);
        setEndDate(timelineData.endDate);
      } catch (err: unknown) {
        console.error("Error fetching meetings:", err);
        let errorMessage = "Failed to load meetings data";
        
        if (err && typeof err === "object") {
          if ("response" in err && err.response) {
            const axiosError = err as { response: { status: number; data: unknown } };
            errorMessage = `Failed to load meetings: ${axiosError.response.status} - ${JSON.stringify(axiosError.response.data)}`;
          } else if ("message" in err) {
            errorMessage = `Failed to load meetings: ${(err as { message: string }).message}`;
          } else if ("code" in err) {
            errorMessage = `Network error: ${(err as { code: string }).code}`;
          }
        }
        
        setError(errorMessage);
        // Set default dates if fetch fails
        const now = new Date();
        setStartDate(new Date(now.getFullYear(), now.getMonth() - 1, 1));
        setEndDate(new Date(now.getFullYear(), now.getMonth() + 1, 1));
      } finally {
        setLoading(false);
      }
    };

    loadMeetings();
  }, []);

  if (loading) {
    return (
      <div className="account-relationship-orbit">
        <div className="account-relationship-orbit-header">
          <label>Account Relationship Orbit</label>
          <div className="account-relationship-orbit-actions">
            <EditIcon className="account-relationship-orbit-action-icon" />
            <ExpandIcon className="account-relationship-orbit-action-icon" />
          </div>
        </div>
        <div className="account-relationship-orbit-content">
          <div style={{ padding: "2rem", textAlign: "center" }}>
            Loading meetings...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="account-relationship-orbit">
        <div className="account-relationship-orbit-header">
          <label>Account Relationship Orbit</label>
          <div className="account-relationship-orbit-actions">
            <EditIcon className="account-relationship-orbit-action-icon" />
            <ExpandIcon className="account-relationship-orbit-action-icon" />
          </div>
        </div>
        <div className="account-relationship-orbit-content">
          <div style={{ padding: "2rem", textAlign: "center", color: "red" }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-relationship-orbit">
      <div className="account-relationship-orbit-header">
        <label>Account Relationship Orbit</label>
        <div className="account-relationship-orbit-actions">
          <EditIcon className="account-relationship-orbit-action-icon" />
          <ExpandIcon className="account-relationship-orbit-action-icon" />
        </div>
      </div>
      <div className="account-relationship-orbit-content">
        <Lifecycle
          startDate={startDate}
          endDate={endDate}
          segments={segments}
          events={events}
        />
      </div>
    </div>
  );
};
