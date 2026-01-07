import type { DetailedViewStats } from "@components/executive-view/types";
import { OneMinuteSummary } from "./one-minute-summary";
import "@components/executive-view/detailed-view/content/index.scss";
import React, { useContext, type FC } from "react";
import { OverflowContainer, QuickLinks } from "@components/common";
import { ExecutiveContext } from "@components/executive-view/context/setup";
import { ExecutiveMapping } from "@components/executive-view/detailed-view/content/executive-mapping";
import { AccountRelationshipOrbit } from "@components/executive-view/detailed-view/content/account-relationship-orbit";
import { ProfileCategory } from "@components/executive-view/detailed-view/content/profile-category";
import { LEADS } from "@components/executive-view/constants";
import { useSelector } from "react-redux";
import type { RootState } from "@stores";

interface DetailedViewContentProps {
  detailedViewStats: DetailedViewStats;
}

export const DetailedViewContent: FC<DetailedViewContentProps> = ({
  detailedViewStats,
}) => {
  const { executiveViewUIFields, typeOfView } = useContext(ExecutiveContext);
  const { quickLinks } = executiveViewUIFields;
  const { headerName, links } = quickLinks;
  
  // Get profileOtherFields from Redux for leads page
  const profileOtherFields = useSelector((state: RootState) => 
    typeOfView === LEADS ? state.leadsDashboard.profileOtherFields : undefined
  );

  // Create dynamic quick links from otherFields if available, otherwise use static links
  const dynamicLinks = React.useMemo(() => {
    if (typeOfView === LEADS && profileOtherFields && profileOtherFields.length > 0) {
      return profileOtherFields.map((field) => {
        // Convert snake_case to Title Case for display name
        const name = field.field_name
          .split('_')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
          .join(' ');
        
        return {
          id: field.field_name,
          name: name,
        };
      });
    }
    return links;
  }, [typeOfView, profileOtherFields, links]);

  const [selectedQuickLinkId, setSelectedQuickLinkId] = React.useState<string>(
    dynamicLinks.length > 0 ? dynamicLinks[0].id : ""
  );

  // Reset selection when dynamicLinks change
  React.useEffect(() => {
    if (dynamicLinks.length > 0) {
      setSelectedQuickLinkId(dynamicLinks[0].id);
    }
  }, [dynamicLinks]);

  return (
    <div className="detailed-view-content">
      <OverflowContainer>
        {typeOfView === LEADS && (
          <>
            {selectedQuickLinkId === "one_minute_summary" ? (
              <OneMinuteSummary 
                detailedViewStats={detailedViewStats}
                selectedQuickLinkId={selectedQuickLinkId}
                otherFields={profileOtherFields}
              />
            ) : (
              profileOtherFields && profileOtherFields.length > 0 && (
                <ProfileCategory 
                  otherFields={profileOtherFields} 
                  selectedQuickLinkId={selectedQuickLinkId}
                />
              )
            )}
            <ExecutiveMapping />
          </>
        )}
        {typeOfView !== LEADS && (
          <AccountRelationshipOrbit />
        )}
      </OverflowContainer>
      <QuickLinks 
        className={""} 
        headerName={headerName} 
        quickLinks={dynamicLinks}
        onLinkSelect={setSelectedQuickLinkId}
      />
    </div>
  );
};
