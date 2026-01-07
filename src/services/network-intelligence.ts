import axios from "@services/axios-interceptors";

// Use proxy in development, direct URL in production
const API_BASE_URL = import.meta.env.DEV
  ? "/api/v2/api/network-intelligence"  // Use Vite proxy: /api -> http://54.83.73.24:8000
  : "http://54.83.73.24:8000/v2/api/network-intelligence";  // Direct URL in production

export interface NetworkIntelligencePerson {
  id: string;
  name: string;
  headline?: string;
  location?: string;
  current_role?: string;
}

export interface NetworkIntelligenceResponse {
  person: NetworkIntelligencePerson;
  connected_people: NetworkIntelligencePerson[];
  connected_organizations: Array<{
    id: string;
    name: string;
    type: string;
  }>;
  connected_institutions: any[];
  relationships: any[];
  total_connections: number;
}

export const fetchNetworkIntelligence = async (
  personId: string
): Promise<NetworkIntelligenceResponse> => {
  try {
    const url = `${API_BASE_URL}/person/${personId}`;
    const response = await axios.get<NetworkIntelligenceResponse>(url, {
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
        const fallbackUrl = `http://54.83.73.24:8000/v2/api/network-intelligence/person/${personId}`;
        const fallbackResponse = await axios.get<NetworkIntelligenceResponse>(fallbackUrl, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        });
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error("Error fetching network intelligence:", fallbackError);
        throw fallbackError;
      }
    }
    console.error("Error fetching network intelligence:", error);
    throw error;
  }
};

// Council relationships response can have similar structure or different
export interface CouncilRelationshipsResponse {
  person?: NetworkIntelligencePerson;
  connected_people?: NetworkIntelligencePerson[];
  relationships?: any[];
  [key: string]: any; // Allow for flexibility in response structure
}

export const fetchCouncilRelationships = async (
  personId: string
): Promise<CouncilRelationshipsResponse> => {
  try {
    const url = `${API_BASE_URL}/search-council-relationships/${personId}`;
    const response = await axios.get<CouncilRelationshipsResponse>(url, {
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
        const fallbackUrl = `http://54.83.73.24:8000/v2/api/network-intelligence/search-council-relationships/${personId}`;
        const fallbackResponse = await axios.get<CouncilRelationshipsResponse>(fallbackUrl, {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000,
        });
        return fallbackResponse.data;
      } catch (fallbackError) {
        console.error("Error fetching council relationships:", fallbackError);
        throw fallbackError;
      }
    }
    console.error("Error fetching council relationships:", error);
    throw error;
  }
};
