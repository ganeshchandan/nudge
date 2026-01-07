import axios from "@services/axios-interceptors";

export interface NetworkNode {
  id: string;
  name: string;
  headline?: string;
  location?: string;
  current_role?: string;
  network_type: "external" | "Internal";
  type?: string;
}

export interface NetworkIntelligenceResponse {
  nodes: {
    Person: NetworkNode[];
    Organization: NetworkNode[];
    Institution: NetworkNode[];
  };
  relationships: any[];
  summary: {
    total_people: number;
    total_organizations: number;
    total_institutions: number;
    total_relationships: number;
  };
}

// Use proxy in development, direct URL in production
const NETWORK_INTELLIGENCE_API_URL = 
  import.meta.env.DEV 
    ? "/api/v2/api/network-intelligence/get-all"  // Use Vite proxy: /api -> http://54.83.73.24:8000
    : "http://54.83.73.24:8000/v2/api/network-intelligence/get-all";  // Direct URL in production

/**
 * Fetches network intelligence data from the API
 * @returns Promise with network intelligence data
 */
export const fetchNetworkIntelligence = async (): Promise<NetworkIntelligenceResponse> => {
  try {
    const response = await axios.get<NetworkIntelligenceResponse>(NETWORK_INTELLIGENCE_API_URL, {
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
        const fallbackResponse = await axios.get<NetworkIntelligenceResponse>(
          "http://54.83.73.24:8000/v2/api/network-intelligence/get-all",
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

