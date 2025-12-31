import "@components/common/chart/doughnut/index.scss";
import { useMemo, type FC, type PropsWithChildren } from "react";
import { getRadiusInNumber } from "./utils";

interface DoughnutProps {
  size: string;
  strokeWidth: string;
  storke: string;
  value: number;
  id: string;
}

export const Doughnut: FC<PropsWithChildren<DoughnutProps>> = ({
  size,
  strokeWidth,
  storke,
  value,
}) => {
  const { radius, sizeInNumber } = getRadiusInNumber(size, strokeWidth);

  const commonCircleStyle = {
    cx: "50%",
    cy: "50%",
    r: radius,
    strokeWidth,
  };

  const circle = useMemo(() => 2 * Math.PI * radius, [radius]);
  const storkePct = useMemo(() => ((100 - value) * circle) / 100, [value]);

  return (
    <svg
      className="doughnut-chart"
      width={size}
      height={size}
      viewBox={`0 0 ${sizeInNumber} ${sizeInNumber}`}
    >
      <text
        className="doughnut-chart-text"
        textAnchor="middle"
        x="50%"
        y="50%"
        text-anchor="middle"
        dominant-baseline="middle"
        font-size="10.5"
        fill={storke}
      >{`${value}%`}</text>
      <circle className="doughnut-chart-track" {...commonCircleStyle}></circle>
      <circle
        className="doughnut-chart-progress"
        {...commonCircleStyle}
        style={{ strokeDasharray: circle, strokeDashoffset: storkePct }}
        stroke={storke}
      ></circle>
    </svg>
  );
};
