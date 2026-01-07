import "@components/stats-dashboard/index.scss";
import { StatsDashboardHeader } from "@components/stats-dashboard/header";
import { StatsDashboardOverviewFollowup } from "@components/stats-dashboard/overview-followup";
import { StatsSummaryNudge } from "@components/stats-dashboard/summary-nudge";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCompanySummary, updateCompanyProfiles } from "@stores/reducers/stats-dashboard";
import { fetchCompanySummaryAggregate, fetchCompanySummary } from "@services/company-summary";

export const StatsDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCompanySummary = async () => {
      try {
        // Fetch aggregate data for header overview
        const aggregateData = await fetchCompanySummaryAggregate();
        dispatch(updateCompanySummary(aggregateData));

        // Fetch company summary data for program scorecard
        const companyData = await fetchCompanySummary();
        dispatch(updateCompanyProfiles(companyData.companies));
      } catch (error) {
        console.error("Failed to load company summary data:", error);
        // Optionally dispatch an error action or show error message
      }
    };

    loadCompanySummary();
  }, [dispatch]);

  return (
    <div className="stats-dashboard-content smooth-content-load">
      <StatsDashboardHeader />
      <StatsDashboardOverviewFollowup />
      <StatsSummaryNudge />
    </div>
  );
};
