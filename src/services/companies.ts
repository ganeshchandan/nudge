import axios from "@services/axios-interceptors";

export interface ExecutiveSummaryItem {
  bullet: string;
  statement: string;
}

export interface CompanyData {
  _id: string;
  company_id: string;
  raw_company_id: string;
  company_name: string;
  executive_summary: ExecutiveSummaryItem[];
  strategic_posture: string;
  investment_direction: string;
  pressure_vectors: string;
  executive_summary_report: string;
  model_used?: string;
  generated_at?: string;
  company_logo_url: string;
  company: string;
}

export type CompaniesResponse = CompanyData[];

// Use proxy in development, direct URL in production
const COMPANIES_API_URL = "/api/v2/api/companies/";
// import.meta.env.DEV
//   ? "/api/v2/api/companies/"  // Use Vite proxy: /api -> http://54.83.73.24:8000
//   : "http://54.83.73.24:8000/v2/api/companies/";  // Direct URL in production

/**
 * Fetches companies data from the API
 * @returns Promise with companies data
 */
export const fetchCompanies = async (): Promise<CompaniesResponse> => {
  try {
    const response = await axios.get<CompaniesResponse>(COMPANIES_API_URL, {
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
        const fallbackResponse = await axios.get<CompaniesResponse>(
          "http://54.83.73.24:8000/v2/api/companies/",
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
