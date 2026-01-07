import { type FC } from "react";

interface RegionData {
  name: string;
  percentage: number;
  color: string;
}

const regions: RegionData[] = [
  { name: "EMEA", percentage: 39, color: "#FF6B35" }, // orange-brown
  { name: "USA", percentage: 21, color: "#4ECDC4" }, // light blue
  { name: "China", percentage: 16, color: "#FFCE56" }, // yellow
  { name: "LatAm", percentage: 10, color: "#4BC0C0" }, // teal
  { name: "Others", percentage: 10, color: "#9966FF" }, // purple
  { name: "Japan", percentage: 9, color: "#FFE66D" }, // light yellow
];

export const RegionalDonutChart: FC = () => {
  const totalTarget = "€19.3bn";
  const year = "FY 2026";
  const size = 154;
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  const gapSize = 2; // Gap between segments in pixels
  const totalGaps = regions.length * gapSize;
  const adjustedCircumference = circumference - totalGaps;

  let currentOffset = 0;

  return (
    <div className="regional-donut-chart">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {regions.map((region, index) => {
          const segmentLength = (region.percentage / 100) * adjustedCircumference;
          const offset = currentOffset + (index * gapSize);
          currentOffset += segmentLength + gapSize;

          return (
            <circle
              key={index}
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke={region.color}
              strokeWidth={strokeWidth}
              strokeDasharray={`${segmentLength} ${circumference}`}
              strokeDashoffset={-offset}
              strokeLinecap="round"
              transform={`rotate(-90 ${center} ${center})`}
            />
          );
        })}
        <text
          x={center}
          y={center - 2}
          textAnchor="middle"
          dominantBaseline="middle"
          className="chart-center-text-large"
        >
          {totalTarget}
        </text>
        <text
          x={center}
          y={center + 12}
          textAnchor="middle"
          dominantBaseline="middle"
          className="chart-center-text-small"
        >
          {year}
        </text>
      </svg>
      <div className="chart-legend">
        {regions.map((region, index) => (
          <div key={region.name}>
            <span
              className={`legend-dot legend-dot-${index + 1}`}
              style={{ backgroundColor: region.color }}
            />
            <div className={`legend-item legend-item-${index + 1}`}>
              <span className="legend-label">{region.name}</span>
              <span className="legend-percentage">{region.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

