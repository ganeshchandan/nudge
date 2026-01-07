import axios from "@services/axios-interceptors";

export interface Profile {
  _id: string;
  profile_id: string;
  display_name: string;
  user_profile_image: string;
  title: string;
  organization: string;
  persona_quadrant: string;
  behavioral_traits: string[];
  is_bookmarked: boolean;
  bookmark_timestamp: string | null;
  created_at: string;
  updated_at: string;
}

export type ProfilesResponse = Profile[];

// Use proxy in development, direct URL in production
const PROFILES_API_URL = "/api/v2/api/profiles/";

// ? "/api/v2/api/profiles/" // Use Vite proxy: /api -> http://54.83.73.24:8000
// : "http://54.83.73.24:8000/v2/api/profiles/"; // Direct URL in production

/**
 * Fetches profiles data from the API
 * @param organization - Optional filter to return only profiles matching this organization name
 * @returns Promise with profiles data
 */
export const fetchProfiles = async (
  organization?: string
): Promise<ProfilesResponse> => {
  try {
    const params = organization ? { organization } : {};
    const response = await axios.get<ProfilesResponse>(PROFILES_API_URL, {
      params,
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
        const url = organization
          ? `http://54.83.73.24:8000/v2/api/profiles/?organization=${encodeURIComponent(
              organization
            )}`
          : "http://54.83.73.24:8000/v2/api/profiles/";
        const fallbackResponse = await axios.get<ProfilesResponse>(url, {
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
