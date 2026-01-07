import type {
  DetailedViewStats,
  ExecutiveCapitalDetails,
  OneMinuteSummary,
} from "@components/executive-view/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CompanyData } from "@services/companies";
import type { CompanyDossier } from "@services/company-dossier";

export interface LineDashboardState {
  executiveCapitalDetails: ExecutiveCapitalDetails;
  detailedViewStats: DetailedViewStats;
  selectedExecutiveID: number;
  companyIdMap: Record<number, string>; // Maps executive ID to company_id
}

const initialState: LineDashboardState = {
  selectedExecutiveID: -1,
  companyIdMap: {},
  executiveCapitalDetails: {
    executiveCapitals: [],
    overallStats: {
      dipsFlagged: "02",
      competitorEntry: "01",
      uniqueOffering: "02",
    },
  },
  detailedViewStats: {
    id: 124,
    image: "userIcon2",
    name: "Murdo Gordon",
    teamName: "EVP Global Commercial Ops | Amgen",
    engagementScores: {
      sentiment: "none",
      accountRelationship: "weak",
    },
    oneMinuteSummary: [
      {
        header: "",
        content:
          "Need to make an impression in 1 go we may not get many chances",
      },
      { header: "", content: "Must avoid over indexing on USA only thinking" },
      {
        header: "",
        content:
          "Summarize thoughts in first 10 min (insight → opportunity → implication for Amgen) then elaborate",
      },
      {
        header: "",
        content:
          "Driven by numbers and quantifiable actions- Looks for “Financial Sense”",
      },
      {
        header: "",
        content:
          "Quick Turnarounds / Bold Decisions (he is known for his bold pricing strategies)",
      },
      {
        header: "",
        content:
          "Believes in scale - APAC focused for growthon his mind & seems his personal agenda",
      },
      {
        header: "",
        content: "Favouritism with empowerment of close trusted team",
      }
      
      
    ],
  },
};

export const lineDashboardConfig = createSlice({
  name: "lineDashboardConfig",
  initialState,
  reducers: {
    setLineSelectedExecutiveID: (state, action: PayloadAction<number>) => {
      state.selectedExecutiveID = action.payload;
      if (action.payload !== -1) {
        const {
          name = "",
          teamName = "",
          image = "",
        } = state.executiveCapitalDetails.executiveCapitals.find(
          ({ id }) => id === action.payload
        ) || {};
        state.detailedViewStats = {
          ...state.detailedViewStats,
          name,
          id: action.payload,
          teamName,
          image,
        };
      }
    },
    updateCompanies: (state, action: PayloadAction<CompanyData[]>) => {
      // Map API companies data to ExecutiveStats format
      state.executiveCapitalDetails.executiveCapitals = action.payload.map(
        (company, index) => {
          // Use index + 124 as id to maintain compatibility with existing IDs
          const id = index + 124;

          // Store company_id mapping
          state.companyIdMap[id] = company.company_id;

          // Parse strategic_posture, investment_direction, and pressure_vectors
          // These are strings in the API, we'll split them or use as-is
          const strategicPosture = company.strategic_posture
            ? [{ name: company.strategic_posture }]
            : [];

          const investmentDirection = company.investment_direction
            ? [{ name: company.investment_direction }]
            : [];

          const pressureVectors = company.pressure_vectors
            ? [{ name: company.pressure_vectors }]
            : [];

          // Extract teamName from executive_summary if available, or use a default
          // Try to extract from first executive_summary item or use company name
          const teamName = company.executive_summary?.[0]?.statement
            ? company.executive_summary[0].statement.substring(0, 50) + "..."
            : company.company_name;

          // Use company logo or default image based on index
          const imageIndex = (index % 4) + 1;
          const image = `company${imageIndex}`;

          return {
            id,
            image,
            name: company.company_name,
            teamName,
            detailsStats: {
              strategicPosture,
              investmentDirection,
              pressureVectors,
              accountRelationship: 2, // Default value as API doesn't provide this
            },
            // You can add tags based on company data if needed
            tags: [],
          };
        }
      );
    },
    updateCompanyDossier: (state, action: PayloadAction<{ companyId: string; dossier: CompanyDossier }>) => {
      // Update detailedViewStats with dossier data
      // Map dossier fields to detailedViewStats based on API response structure
      const { dossier } = action.payload;
      
      // Map one_minute_summary if available
      if (dossier.one_minute_summary && Array.isArray(dossier.one_minute_summary)) {
        const oneMinuteSummary: OneMinuteSummary[] = dossier.one_minute_summary.map((item: any) => {
          const header = typeof item === 'string' ? "" : (item.header || item.title || "").trim();
          const content = typeof item === 'string' ? item.trim() : (item.content || item.description || "").trim();
          return { header, content };
        });
        state.detailedViewStats.oneMinuteSummary = oneMinuteSummary;
      }
      
      // Map other fields as needed based on API response structure
      // Example:
      // if (dossier.name) state.detailedViewStats.name = dossier.name;
      // if (dossier.teamName) state.detailedViewStats.teamName = dossier.teamName;
    },
  },
});

export const { setLineSelectedExecutiveID, updateCompanies, updateCompanyDossier } = lineDashboardConfig.actions;
export const LineDashboardReducer = lineDashboardConfig.reducer;
