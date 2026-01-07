import axios from "@services/axios-interceptors";

export interface CompanySummaryAggregateResponse {
  account_plans: number;
  tasks_at_risk: number;
  escalations: number;
  event_closing: number;
  reminders: number;
}

export interface RelationshipStatusCounts {
  Hot?: number;
  Warm?: number;
  Cold?: number;
  "Not Specified"?: number;
}

export interface Assignee {
  name: string;
  title: string;
  profile_picture_url: string;
}

export interface CompanySummaryData {
  company: string;
  company_logo_url?: string;
  relationship_status_counts: RelationshipStatusCounts;
  assignees?: Assignee[];
}

export interface CompanySummaryResponse {
  companies: CompanySummaryData[];
  total_relationship_status_counts: RelationshipStatusCounts;
  total_companies: number;
}

// Use proxy in development, direct URL in production
const COMPANY_SUMMARY_AGGREGATE_API_URL = import.meta.env.DEV
  ? "/api/v2/api/dashboard/company-summary/aggregate" // Use Vite proxy: /api -> http://54.83.73.24:8000
  : "http://54.83.73.24:8000/v2/api/dashboard/company-summary/aggregate"; // Direct URL in production

const COMPANY_SUMMARY_API_URL = import.meta.env.DEV
  ? "/api/v2/api/dashboard/company-summary" // Use Vite proxy: /api -> http://54.83.73.24:8000
  : "http://54.83.73.24:8000/v2/api/dashboard/company-summary"; // Direct URL in production

/**
 * Fetches company summary aggregate data from the API
 * @returns Promise with company summary aggregate data
 */
export const fetchCompanySummaryAggregate =
  async (): Promise<CompanySummaryAggregateResponse> => {
    try {
      const response = await axios.get<CompanySummaryAggregateResponse>(
        COMPANY_SUMMARY_AGGREGATE_API_URL,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );
      return response.data;
    } catch (error) {
      // If proxy fails in dev, try direct URL as fallback
      if (import.meta.env.DEV) {
        try {
          const fallbackResponse =
            await axios.get<CompanySummaryAggregateResponse>(
              "http://54.83.73.24:8000/v2/api/dashboard/company-summary/aggregate",
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

/**
 * Fetches company summary data from the API
 * @returns Promise with company summary data
 */
export const fetchCompanySummary =
  async (): Promise<CompanySummaryResponse> => {
    try {
      const response = await axios.get<CompanySummaryResponse>(
        COMPANY_SUMMARY_API_URL,
        {
          headers: {
            "Content-Type": "application/json",
          },
          timeout: 10000, // 10 second timeout
        }
      );
      return response.data;
    } catch (error) {
      // If proxy fails in dev, try direct URL as fallback
      if (import.meta.env.DEV) {
        try {
          const fallbackResponse = await axios.get<CompanySummaryResponse>(
            "http://54.83.73.24:8000/v2/api/dashboard/company-summary",
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
