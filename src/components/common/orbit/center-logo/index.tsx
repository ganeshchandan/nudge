import { memo } from "react";
import gskLogo from "@assets/images/app_image/company_1.png";
import "@components/common/orbit/center-logo/index.scss";
import type { OrbitConfig } from "@components/common/orbit/types";

interface CenterLogoProps {
  logoText: string;
  config: OrbitConfig;
  onClick?: () => void;
}

const CenterLogo: React.FC<CenterLogoProps> = memo(
  ({ logoText, config, onClick }) => {
    return (
      <div
        className="center-logo"
        onClick={onClick}
        style={{
          cursor: onClick ? "pointer" : "default",
          width: `${config.visual.centerLogoSize}px`,
          height: `${config.visual.centerLogoSize}px`,
        }}
      >
        <div className="logo-background"></div>
        <img
          src={gskLogo}
          alt="GSK Logo"
          className="logo-image"
          onError={(e) => {
            // Fallback to text if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = "none";
            const textDiv = target.nextElementSibling as HTMLElement;
            if (textDiv) {
              textDiv.style.display = "flex";
            }
          }}
        />
        <div
          className="logo-text"
          style={{ display: "none" }}
          aria-hidden="true"
        >
          {logoText.toLowerCase()}
        </div>
      </div>
    );
  }
);

CenterLogo.displayName = "CenterLogo";

export default CenterLogo;
