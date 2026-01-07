import { type FC } from "react";

const implications = [
  "Renewed org energy in EU should help shape globa opportunities like content studio, MLR etc.",
  "Bayer is showing strong inclination towards Digital transformation - Alignment with Bayer's Global IT team (Global Shared Services) is critical to engage and scale",
  "Opportunistic play on safety given Genpact issues",
  "Create a launch excellence package with OA to target new upcoming brands",
];

export const StrategicImplications: FC = () => {
  return (
    <div className="strategic-implications">
      <h2 className="section-title">What it means for us</h2>
      <ul className="implications-list">
        {implications.map((implication, index) => (
          <li key={index}>{implication}</li>
        ))}
      </ul>
    </div>
  );
};

