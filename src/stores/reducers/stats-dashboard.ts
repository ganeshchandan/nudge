import type {
  CompanyProfile,
  StatsDashboardOverview,
  SummaryStatsList,
  TopPerformerDetail,
} from "@components/stats-dashboard/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CompanySummaryData } from "@services/company-summary";

export interface StatsDashboardState {
  selectedStatsTab: string;
  statsDashboardOverviews: StatsDashboardOverview[];
  followUp: string;
  companyProfiles: CompanyProfile[];
  accountSummary: {
    executiveMetrics: {
      engageement: SummaryStatsList[];
      relationship: SummaryStatsList[];
      strategic: SummaryStatsList[];
      business: SummaryStatsList[];
    };
    accountLevelScore: SummaryStatsList[];
    programLevelScore: SummaryStatsList[];
    topPerformers: TopPerformerDetail[];
    programView: {
      personImage: string;
      powerCentres: string;
      actionsTaken: string;
      scores: string;
    }[];
  };
}

const initialState: StatsDashboardState = {
  selectedStatsTab: "overview",
  statsDashboardOverviews: [],
  followUp: "02",
  accountSummary: {
    executiveMetrics: {
      engageement: [
        {
          name: "Last-touch Recency",
          value: "8",
        },
        {
          name: "Meeting Frequency",
          value: "8.33",
        },
        {
          name: "Interaction Sentiment",
          value: "4.8",
        },
        {
          name: "Game/Non-game",
          value: "2",
        },
        {
          name: "Persona Outreach",
          value: "1.5",
        },
      ],
      relationship: [
        {
          name: "Heat Classification",
          value: "7.5",
        },
        {
          name: "Touchpoint Consistency",
          value: "4.37",
        },
        {
          name: "Influencer Activation",
          value: "2",
        },
      ],
      strategic: [
        {
          name: "Offering Alignment",
          value: "6",
        },
        {
          name: "Event Participation",
          value: "3",
        },
        {
          name: "External Signals",
          value: "3.5",
        },
      ],
      business: [
        {
          name: "Pipeline Contribution",
          value: "1.125",
        },
        {
          name: "Conversion Potential",
          value: "4.5",
        },
      ],
    },
    accountLevelScore: [
      {
        name: "Average Executive Score",
        value: "25.38",
      },
      {
        name: "Engagement Effort Score",
        value: "12.6",
      },
      {
        name: "Business Impact Score",
        value: "9.6",
      },
      {
        name: "NPS (0–10)",
        value: "7",
      },
      {
        name: "Powercentre Count",
        value: "6.67",
      },
      {
        name: "Influencer Count",
        value: "2.67",
      },
    ],
    programLevelScore: [
      {
        name: "Average Account Score",
        value: "23.52",
      },
      {
        name: "Powercentre Coverage",
        value: "5.42",
      },
      {
        name: "Influencer Coverage",
        value: "2.5",
      },
      {
        name: "Engagement Effort",
        value: "12.01",
      },
      {
        name: "Business Impact",
        value: "8.25",
      },
      {
        name: "NPS",
        value: "6.75",
      },
    ],
    topPerformers: [
      {
        name: "Alexa",
        awardName: "Maverick Award",
        personImage: "topPerformers1",
      },
      {
        name: "Bran",
        awardName: "Northstar Award",
        personImage: "topPerformers2",
      },
      {
        name: "Alan",
        awardName: "Zenith Star Award",
        personImage: "topPerformers3",
      },
    ],
    programView: [
      {
        personImage: "userIcon2",
        powerCentres: "15",
        actionsTaken: "10",
        scores: "67%",
      },
      {
        personImage: "userIcon3",
        powerCentres: "8",
        actionsTaken: "4",
        scores: "50%",
      },
      {
        personImage: "userIcon4",
        powerCentres: "5",
        actionsTaken: "2",
        scores: "40%",
      },
    ],
  },
  companyProfiles: [],
};

export const statsDashboardConfig = createSlice({
  name: "statsDashboardConfig",
  initialState,
  reducers: {
    updateSelectedStatsTab: (state, action: PayloadAction<string>) => {
      state.selectedStatsTab = action.payload;
    },
    updateCompanySummary: (
      state,
      action: PayloadAction<{
        account_plans: number;
        tasks_at_risk: number;
        escalations: number;
        event_closing: number;
        reminders: number;
      }>
    ) => {
      const { account_plans, tasks_at_risk, escalations, event_closing, reminders } =
        action.payload;

      // Update statsDashboardOverviews with API data
      state.statsDashboardOverviews = [
        {
          type: "noofRFPs",
          value: account_plans.toString(),
          label: "Account Plans",
        },
        {
          type: "warning",
          value: tasks_at_risk.toString().padStart(2, "0"),
          label: "Task at Risk",
        },
        {
          type: "escalations",
          value: escalations.toString().padStart(2, "0"),
          label: "Escalations",
        },
        {
          type: "eventClosing",
          value: event_closing.toString().padStart(2, "0"),
          label: "Event Closing ",
        },
        {
          type: "remainder",
          value: reminders.toString().padStart(2, "0"),
          label: "Reminders",
        },
      ];
    },
    updateCompanyProfiles: (
      state,
      action: PayloadAction<CompanySummaryData[]>
    ) => {
      // Map API data to CompanyProfile format
      state.companyProfiles = action.payload.map((company, index) => {
        const counts = company.relationship_status_counts;
        const hot = counts.Hot || 0;
        const warm = counts.Warm || 0;
        const cold = counts.Cold || 0;

        // Use company_logo_url from API if available, otherwise fallback to default
        const getImageKey = (): string => {
          if (company.company_logo_url) {
            return company.company_logo_url;
          }
          // Fallback to default company image if no logo URL provided
          return `company${((index % 4) + 1)}`;
        };

        // Map assignees to internal/external person profiles
        // First assignee -> internalPerson, second assignee -> externalPerson
        const internalPerson = company.assignees && company.assignees.length > 0
          ? {
              name: company.assignees[0].name,
              image: company.assignees[0].profile_picture_url,
              position: company.assignees[0].title,
            }
          : {
              name: "Not Available",
              image: "userIcon2",
              position: "N/A",
            };

        const externalPerson = company.assignees && company.assignees.length > 1
          ? {
              name: company.assignees[1].name,
              image: company.assignees[1].profile_picture_url,
              position: company.assignees[1].title,
            }
          : {
              name: "Not Available",
              image: "userIcon3",
              position: "N/A",
            };

        return {
          _id: `${index + 1}`,
          name: company.company, // Use company name as-is from API
          image: getImageKey(),
          profileStats: {
            hot: hot.toString().padStart(2, "0"),
            warm: warm.toString().padStart(2, "0"),
            cold: cold.toString().padStart(2, "0"),
          },
          internalPerson,
          externalPerson,
        };
      });
    },
  },
});

export const { updateSelectedStatsTab, updateCompanySummary, updateCompanyProfiles } =
  statsDashboardConfig.actions;

export const StatsDashboardReducer = statsDashboardConfig.reducer;
