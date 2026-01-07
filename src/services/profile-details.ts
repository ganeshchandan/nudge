import axios from "@services/axios-interceptors";

// Define the profile details response interface based on API structure
export interface ProfileDetails {
  one_minute_summary?: Array<{
    header?: string;
    content?: string;
    title?: string;
    description?: string;
    [key: string]: any;
  }>;
  [key: string]: any;
}

// Use proxy in development, direct URL in production
const PROFILE_DETAILS_API_BASE_URL = 
  import.meta.env.DEV 
    ? "/api/v2/api/profile_details"  // Use Vite proxy: /api -> http://54.83.73.24:8000
    : "http://54.83.73.24:8000/v2/api/profile_details";  // Direct URL in production

/**
 * Fetches profile details from the API
 * @param profileId - The profile ID to fetch details for
 * @returns Promise with profile details data
 */
export const fetchProfileDetails = async (profileId: string): Promise<ProfileDetails> => {
  try {
    const url = `${PROFILE_DETAILS_API_BASE_URL}/${profileId}`;
    const response = await axios.get<ProfileDetails>(url, {
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
        const fallbackUrl = `http://54.83.73.24:8000/v2/api/profile_details/${profileId}`;
        const fallbackResponse = await axios.get<ProfileDetails>(fallbackUrl, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        });
        return fallbackResponse.data;
      } catch (fallbackError) {
        throw fallbackError;
      }
    }
    throw error;
  }
};

