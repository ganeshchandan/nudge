import type {
  DetailedViewStats,
  ExecutiveCapitalDetails,
  OneMinuteSummary,
} from "@components/executive-view/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Profile } from "@services/profiles";
import type { ProfileDetails } from "@services/profile-details";

export interface LeadsDashboardState {
  executiveCapitalDetails: ExecutiveCapitalDetails;
  detailedViewStats: DetailedViewStats;
  selectedExecutiveID: number;
  selectedCompany: string | null;
  profileIdMap: Record<number, string>; // Maps executive ID to profile_id
}

const initialState: LeadsDashboardState = {
  selectedExecutiveID: -1,
  selectedCompany: null,
  profileIdMap: {},
  executiveCapitalDetails: {
    executiveCapitals: [],
    overallStats: {
      atRisk: "04",
      topConnections: "08",
      performingVerticals: "03",
    },
  },
  detailedViewStats: {
    id: -1,
    image: "",
    name: "",
    teamName: "",
    engagementScores: {
      activeEngagements: "",
      engagementScore: "",
    },
    oneMinuteSummary: [],
  },
};

export const leadDashboardConfig = createSlice({
  name: "leadsDashboardConfig",
  initialState,
  reducers: {
    setSelectedExecutiveID: (state, action: PayloadAction<number>) => {
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
          // Keep existing oneMinuteSummary, it will be updated by updateProfileDetails
          oneMinuteSummary: state.detailedViewStats.oneMinuteSummary || [],
        };
      }
    },
    updateProfiles: (state, action: PayloadAction<Profile[]>) => {
      // Map API profiles to ExecutiveStats format
      state.executiveCapitalDetails.executiveCapitals = action.payload.map(
        (profile, index) => {
          // Use index + 1 as id since profile_id is a string hash
          const id = index + 1;
          
          // Store mapping of id to profile_id
          state.profileIdMap[id] = profile.profile_id;

          return {
            id,
            image: profile.user_profile_image,
            name: profile.display_name,
            teamName: `${profile.title} | ${profile.organization}`,
            detailsStats: {
              personaQuadrant: profile.persona_quadrant
                ? [{ name: profile.persona_quadrant }]
                : [],
              behaviouralTrait: profile.behavioral_traits.map((trait) => ({
                name: trait,
              })),
              // Set default values for fields not in API
              influenceMapping: undefined,
              networkIntelligence: undefined,
              conferenceIntelligence: undefined,
            },
            tags: undefined,
          };
        }
      );

      // Keep existing overallStats as API doesn't provide this
      // You can update this later if API provides overall stats
    },
    updateProfileDetails: (state, action: PayloadAction<ProfileDetails>) => {
      console.log("updateProfileDetails - API response:", action.payload);
      console.log("updateProfileDetails - one_minute_summary:", action.payload.one_minute_summary);
      
      // Map one minute summary from API response to detailedViewStats
      if (action.payload.one_minute_summary && Array.isArray(action.payload.one_minute_summary)) {
        console.log("Processing one_minute_summary array, length:", action.payload.one_minute_summary.length);
        
        const oneMinuteSummary: OneMinuteSummary[] = action.payload.one_minute_summary
          .map((item: any) => {
            // Handle case where item is a string
            if (typeof item === 'string') {
              return {
                header: "",
                content: item.trim(),
              };
            }
            // Handle case where item is an object
            return {
              header: (item.header || item.title || "").trim(),
              content: (item.content || item.description || "").trim(),
            };
          });
        
        console.log("Mapped oneMinuteSummary:", oneMinuteSummary);
        
        // Update detailedViewStats with the mapped one minute summary (even if empty array)
        state.detailedViewStats = {
          ...state.detailedViewStats,
          oneMinuteSummary,
        };
        
        console.log("Updated state.detailedViewStats.oneMinuteSummary:", state.detailedViewStats.oneMinuteSummary);
      } else {
        console.log("No one_minute_summary in response or not an array");
        // If no one_minute_summary in response, set to empty array
        state.detailedViewStats = {
          ...state.detailedViewStats,
          oneMinuteSummary: [],
        };
      }
    },
    setSelectedCompany: (state, action: PayloadAction<string | null>) => {
      state.selectedCompany = action.payload;
    },
  },
});

export const { setSelectedExecutiveID, updateProfiles, setSelectedCompany, updateProfileDetails } =
  leadDashboardConfig.actions;
export const LeadsDashboardReducer = leadDashboardConfig.reducer;
