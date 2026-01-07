import { ExecutiveDashboard } from "@components/executive-view";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setLineSelectedExecutiveID, updateCompanies, updateCompanyDossier } from "@stores/reducers";
import {
  ENGAGEMENT_FIELDS,
  EXECUTIVE_CAPITAL_DETAILS,
  OVERALL_STATS_FIELDS,
  QUICK_LINKS,
} from "@components/line/constants";
import { useEffect } from "react";
import { fetchCompanies } from "@services/companies";
import { fetchCompanyDossier } from "@services/company-dossier";

export const Lines = () => {
  const dispatch = useDispatch();
  const { detailedViewStats, executiveCapitalDetails, selectedExecutiveID, companyIdMap } =
    useSelector((state: RootState) => state.lineDashboard);

  useEffect(() => {
    const loadCompanies = async () => {
      try {
        const companies = await fetchCompanies();
        dispatch(updateCompanies(companies));
      } catch (error) {
        console.error("Failed to load companies data:", error);
        // Optionally dispatch an error action or show error message
      }
    };

    loadCompanies();
  }, [dispatch]);

  const onExecutiveSelect = async (executiveId: number) => {
    dispatch(setLineSelectedExecutiveID(executiveId));
    
    // Fetch company dossier when "View Full Dossier" is clicked
    if (executiveId !== -1) {
      const companyId = companyIdMap[executiveId];
      console.log("Fetching company dossier for executiveId:", executiveId, "companyId:", companyId);
      if (companyId) {
        try {
          const dossier = await fetchCompanyDossier(companyId);
          console.log("Fetched company dossier:", dossier);
          dispatch(updateCompanyDossier({ companyId, dossier }));
        } catch (error) {
          console.error("Failed to fetch company dossier:", error);
        }
      }
    }
  };

  return (
    <ExecutiveDashboard
      detailedViewStats={detailedViewStats}
      executiveCapitalDetails={executiveCapitalDetails}
      selectedExecutiveID={selectedExecutiveID}
      onExecutiveSelect={onExecutiveSelect}
      executiveViewUIFields={{
        overallStatsFields: OVERALL_STATS_FIELDS,
        viewDetailsButtonLabel: "View Full Dossier",
        cardCapitalDetails: EXECUTIVE_CAPITAL_DETAILS,
        engagementFields: ENGAGEMENT_FIELDS,
        quickLinks: {
          headerName: "Account category",
          links: QUICK_LINKS,
        },
      }}
      typeOfView="lines"
    />
  );
};
