import axios from "axios";
// Note: Using plain axios instead of configured instance to avoid baseURL conflicts
// If you need to use the configured instance, import from "@services/axios-interceptors"

export interface Meeting {
  _id: string;
  meeting_key: string;
  meeting_type: string;
  topic: string;
  agenda: string;
  start_time: string;
  duration: number;
  timezone: string;
  participants: string[];
  status: string;
  created_at: string;
  feedback?: string;
  feedback_updated_at?: string;
  meeting_notes?: string;
  zoho_response?: {
    session: {
      startTime: string;
      endTime: string;
      startTimeMillisec: number;
      endTimeMillisec: number;
      [key: string]: unknown;
    };
  };
}

export interface MeetingsResponse {
  meetings: Meeting[];
  total: number;
}

// Use proxy in development, direct URL in production
const MEETINGS_API_URL = "/api/v2/api/meetings/list";
// import.meta.env.DEV
//   ? "/api/v2/api/meetings/list" // Use Vite proxy: /api -> http://54.83.73.24:8000
//   : "http://54.83.73.24:8000/v2/api/meetings/list"; // Direct URL in production

/**
 * Fetches meetings list from the API
 * @returns Promise with meetings data
 */
export const fetchMeetings = async (): Promise<MeetingsResponse> => {
  try {
    const response = await axios.get<MeetingsResponse>(MEETINGS_API_URL, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 10000, // 10 second timeout
    });
    return response.data;
  } catch (error) {
    // If proxy fails in dev, try direct URL as fallback
    if (import.meta.env.DEV) {
      try {
        const fallbackResponse = await axios.get<MeetingsResponse>(
          "http://54.83.73.24:8000/v2/api/meetings/list",
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
          }
        );
        return fallbackResponse.data;
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
    throw error;
  }
};
