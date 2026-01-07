// import { LeadsContent } from "@components/leads/content";
// import { LeadsDetailedView } from "@components/leads/detailed-view";
import { ExecutiveDashboard } from "@components/executive-view";
import type { RootState } from "@stores";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedExecutiveID, updateProfiles } from "@stores/reducers";
import {
  ENGAGEMENT_FIELDS,
  EXECUTIVE_CAPITAL_DETAILS,
  OVERALL_STATS_FIELDS,
  QUICK_LINKS,
} from "@components/leads/constants";
import { useEffect } from "react";
import { fetchProfiles } from "@services/profiles";
import { fetchProfileDetails } from "@services/profile-details";
import { updateProfileDetails } from "@stores/reducers";

export const Leads = () => {
  const dispatch = useDispatch();
  const { detailedViewStats, executiveCapitalDetails, selectedExecutiveID, selectedCompany, profileIdMap } =
    useSelector((state: RootState) => state.leadsDashboard);

  useEffect(() => {
    const loadProfiles = async () => {
      try {
        // Pass selectedCompany as filter if available
        const profiles = await fetchProfiles(selectedCompany || undefined);
        dispatch(updateProfiles(profiles));
      } catch (error) {
        console.error("Failed to load profiles data:", error);
        // Optionally dispatch an error action or show error message
      }
    };

    loadProfiles();
  }, [dispatch, selectedCompany]);

  const onExecutiveSelect = async (executiveId: number) => {
    dispatch(setSelectedExecutiveID(executiveId));
    
    // Fetch profile details when view details is clicked
    if (executiveId !== -1) {
      const profileId = profileIdMap[executiveId];
      console.log("Fetching profile details for executiveId:", executiveId, "profileId:", profileId);
      if (profileId) {
        try {
          const profileDetails = await fetchProfileDetails(profileId);
          console.log("Fetched profileDetails:", profileDetails);
          console.log("one_minute_summary:", profileDetails.one_minute_summary);
          dispatch(updateProfileDetails(profileDetails));
        } catch (error) {
          console.error("Failed to load profile details:", error);
        }
      } else {
        console.warn("No profileId found for executiveId:", executiveId, "profileIdMap:", profileIdMap);
      }
    }
  };

  return (
    // <div className="leads-dashboard">
    //   {/* <LeadsContent /> */}
    //   <LeadsDetailedView />
    // </div>
    <>
      <ExecutiveDashboard
        detailedViewStats={detailedViewStats}
        executiveCapitalDetails={executiveCapitalDetails}
        selectedExecutiveID={selectedExecutiveID}
        onExecutiveSelect={onExecutiveSelect}
        executiveViewUIFields={{
          overallStatsFields: OVERALL_STATS_FIELDS,
          viewDetailsButtonLabel: "VIEW DETAILS",
          cardCapitalDetails: EXECUTIVE_CAPITAL_DETAILS,
          engagementFields: ENGAGEMENT_FIELDS,
          quickLinks: {
            headerName: "Profile Category",
            links: QUICK_LINKS,
          },
        }}
        typeOfView="leads"
      ></ExecutiveDashboard>
      {/* <NudgeAI /> */}
    </>
  );
};
