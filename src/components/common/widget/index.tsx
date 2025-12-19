import type { FC, PropsWithChildren } from "react";
import "@components/common/widget/index.scss";

interface NudgeWidgetProps {
  className: string;
}

export const NudgeWidget: FC<PropsWithChildren<NudgeWidgetProps>> = ({
  children,
  className,
}) => {
  return <div className={`nudge-widget ${className}`}>{children}</div>;
};
