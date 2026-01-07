import { KeyStakeholdersWorkingWithCard } from "./card";
import "./index.scss";

export const KeyStakeholdersWorkingWith = () => {
  return (
    <div className="key-stakeholders-working-with">
      <div className="key-stakeholders-with-header">
        Key Stakeholders we are working with
        <div className="key-stakeholders-with-sub-header">
          Content Transformation Focused
        </div>
      </div>
      <div className="key-stakeholders-working-with-cards">
        <KeyStakeholdersWorkingWithCard
          details={{
            name: "Sebastian Guth",
            description:
              "“It's time for us to double down on the U.S. to significantly accelerate growth in this region driven by Digital Transformation and Technological Innovation.”",
            image: "sebastianGuth",
            position: "President",
            responsibility: "Bayer`s Pharmaceutical Business in Americas",
          }}
        />
        <KeyStakeholdersWorkingWithCard
          details={{
            name: "Brian Cantwell",
            description:
              '“Pharma can potentially take "digital to 10x” when digital subject matter experts start to partner closely across functions, including with the R&D, medical and market access organization.”',
            image: "brianCantwell",
            position: "",
            responsibility: "",
          }}
        />
      </div>
    </div>
  );
};
