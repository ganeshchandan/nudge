import type { FC, PropsWithChildren } from "react";

interface ExecutiveViewDetailItemProps {
  label: string;
}

export const ExecutiveViewDetailItem: FC<
  PropsWithChildren<ExecutiveViewDetailItemProps>
> = ({ label, children }) => {
  return (
    <div className="executive-capital-detail-item">
      <div className="executive-capital-detail-item-header">{label}</div>
      <div className="executive-capital-detail-item-content">{children}</div>
    </div>
  );
};
