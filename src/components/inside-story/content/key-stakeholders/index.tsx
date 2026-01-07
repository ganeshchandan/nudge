import "./index.scss";
import { OverflowContainer } from "@components/common";
import { KeyStakeholdersWorkingWith } from "./working-with";
import { TeamMembers } from "./team-members";
import { StakeholdersInformationList } from "./information-list";

export const KeyStakeholders = () => {
  return (
    <OverflowContainer>
      <div className="key-stakeholders">
        <KeyStakeholdersWorkingWith />
        <TeamMembers
          teamName="Bayer (US) Digital Ops Team"
          personDetailCards={[
            {
              id: "12",
              image: "brianCantwell",
              name: "Brian Cantwell",
              teamName: "VP Digital Strategy & Operations",
              priorities: {
                headerName: "2026 Priorities",
                subHeader: "Digital Strategy & Operations Focus",
                items: [
                  "Media Optimization",
                  "Digital Ops Vendor Transition",
                  "Modular Content Approach",
                  "Content Management",
                ],
              },
              status: {
                label: "Neutral but positive",
                type: "positive",
              },
            },
            {
              id: "13",
              image: "anuragThakore",
              name: "Anurag Thakore",
              teamName: "Senior Director & Head Digital Ops",
              priorities: {
                headerName: "2026 Priorities",
                subHeader: "Digital Strategy & Operations Focus",
                items: [
                  "Digital Ops Partner Transition​",
                  "Website Design System 3.0",
                  "Smart Digital Campaign​",
                  "Modular Content Approach",
                  "Content Management",
                ],
              },
              status: {
                label: "Indegene Champion",
                type: "positive",
              },
            },
          ]}
        />
        <TeamMembers
          teamName="Bayer (US) Marketing Team"
          personDetailCards={[
            {
              id: "12",
              image: "amyHessels",
              name: "Amy Hessels",
              teamName: "VP Marketing Ops Pharmaceuticals US Organization",
              priorities: {
                headerName: "2026 Priorities",
                subHeader: "Marketing Ops & Effectiveness",
                items: [
                  "Agile Facilitation between Brand teams & Marketing Ops",
                  "PRT Operations and Enhancement (Focus on Speed and Efficiency",
                  "Content Management (DAM as focus) & Grow new content by 20% Y-o-Y",
                  "Creative Service Streamline & Efficiency",
                  "Promotional Programs Efficiency( Display & Sponsorships",
                ],
              },
              status: {
                label: "Neutral to negative",
                type: "negative",
              },
            },
          ]}
        />
        <StakeholdersInformationList
          headerName={"What are the gaps in digital & marketing ops?"}
          informations={[
            "The Content Supply Chain across the Bayer ecosystem is decentralized and disconnected",
            "The Global Content processes are not in alignment with regional market needs & same disconnect between brand teams & Creative services",
            "IT Services in Bayer comes under Global Shared Services, leading to resistance for external vendors, hence lack of system upgrade",
            "Commercial Content Process / system maturity is at latent stage (Stage 0)",
          ]}
        />
        <StakeholdersInformationList
          headerName={"What are we trying to do with this team?​"}
          informations={[
            "Making in-roads to become Digital & Marketing Operation Team’s Vendor of Choice ( DAM, Modular Content and Content Transformation as a whole)",
            "Partner of Choice for Creative Services to bring all the brand teams under one umbrella)",
          ]}
        />
        <div className="key-stakeholders-footer">
          In a Nutshell, enabling these two teams to create acentralized
          integrated US market agnostic Content Supply Chain Ecosystem
        </div>
      </div>
    </OverflowContainer>
  );
};
