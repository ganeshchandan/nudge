import { APP_IMAGES } from "@assets/images/app_image";
import { type FC } from "react";

interface Partner {
  name: string;
  focus: string;
}

const partners: Partner[] = [
  { name: "AKTANA", focus: "Customer Centered Commercial Model" },
  { name: "Veeva", focus: "Enhance HCP Engagement" },
  { name: "accenture", focus: "Patient Monitoring" },
  { name: "ORACLE", focus: "Patient Monitoring" },
  { name: "tcs", focus: "Clinical Trial Planning" },
  { name: "genpact", focus: "Adverse Event Processing" },
];

export const KeyPartners: FC = () => {
  return (
    <div className="key-partners">
      <h2 className="section-title">Key Partners</h2>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <div className="partner-logo">
              <img src={APP_IMAGES[partner.name]} alt={partner.name} />
            </div>
            <div className="partner-focus">{partner.focus}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
