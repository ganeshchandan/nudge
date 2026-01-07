import type { FC } from "react";
import "./index.scss";
import { NudgeWidget } from "@components/common/widget";
import type {
  CompanyProfile,
  CompanyProfileStats,
} from "@components/stats-dashboard/types";
import { APP_IMAGES } from "@assets/images/app_image";
import { CompanyPersonProfiles } from "./company-person-profiles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedCompany } from "@stores/reducers";

interface CompanyWidgetProps {
  companyProfile: CompanyProfile;
  index: number;
}

const STATS_KEYS: { displayName: string; key: keyof CompanyProfileStats }[] = [
  { displayName: "Hot", key: "hot" },
  { displayName: "Warm", key: "warm" },
  { displayName: "Cold", key: "cold" },
];

export const CompanyWidget: FC<CompanyWidgetProps> = ({
  companyProfile,
  index,
}) => {
  const { image, name, profileStats, internalPerson, externalPerson } =
    companyProfile;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCompanyClick = () => {
    // Store selected company name and navigate to leads page
    dispatch(setSelectedCompany(name));
    if (name === "Bayer") {
      navigate("/dashboard/lens");
    } else {
      navigate("/dashboard/leads");
    }
  };

  // Check if image is a URL or an APP_IMAGES key
  const imageSrc =
    image.startsWith("http") || image.startsWith("/")
      ? image
      : APP_IMAGES[name.toLowerCase()] || image;

  console.log(companyProfile);

  return (
    <NudgeWidget className={`company-widget image-${index % 5}`}>
      <div className="company-widget-content" onClick={onCompanyClick}>
        <div className="company-widget-icon">
          <img src={imageSrc} alt={name} />
        </div>
        <div className="company-profile-stats">
          {STATS_KEYS.map(({ displayName, key }) => (
            <div className="company-profile-stats-item">
              <div className="company-profile-stats-item-value">
                {profileStats[key]}
              </div>
              <div className="company-profile-stats-item-name">
                {displayName}
              </div>
            </div>
          ))}
        </div>
        <div className="company-person-profiles">
          <CompanyPersonProfiles companyPersonProfile={internalPerson} />
          <CompanyPersonProfiles companyPersonProfile={externalPerson} />
        </div>
      </div>
    </NudgeWidget>
  );
};
