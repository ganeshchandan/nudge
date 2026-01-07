import type { FC } from "react";
import type { CompanyProfilePerson } from "@components/stats-dashboard/types";
import { ProfileDetails } from "@components/common";

interface CompanyPersonProfilesProps {
  companyPersonProfile: CompanyProfilePerson;
}

export const CompanyPersonProfiles: FC<CompanyPersonProfilesProps> = ({
  companyPersonProfile,
}) => {
  const { image, name, position } = companyPersonProfile;
  return (
    <div className="company-person-profile">
      <ProfileDetails
        imageUrl={image}
        name={name}
        teamName={position}
        className="company-person-profile-details"
      />
    </div>
  );
};
