import axios from "@services/axios-interceptors";

// Define the company dossier response interface based on API structure
export interface CompanyDossier {
  // Add fields based on actual API response structure
  // This is a placeholder - adjust based on actual API response structure
  [key: string]: any;
}

// Use proxy in development, direct URL in production
const COMPANY_DOSSIER_API_BASE_URL = "/api/v2/api/company-dossier";
// import.meta.env.DEV
//   ? "/api/v2/api/company-dossier"  // Use Vite proxy: /api -> http://54.83.73.24:8000
//   : "http://54.83.73.24:8000/v2/api/company-dossier";  // Direct URL in production

/**
 * Fetches company dossier from the API
 * @param companyId - The company ID to fetch dossier for
 * @returns Promise with company dossier data
 */
export const fetchCompanyDossier = async (
  companyId: string
): Promise<CompanyDossier> => {
  try {
    const url = `${COMPANY_DOSSIER_API_BASE_URL}/${companyId}`;
    const response = await axios.get<CompanyDossier>(url, {
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
        const fallbackUrl = `http://54.83.73.24:8000/v2/api/company-dossier/${companyId}`;
        const fallbackResponse = await axios.get<CompanyDossier>(fallbackUrl, {
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
