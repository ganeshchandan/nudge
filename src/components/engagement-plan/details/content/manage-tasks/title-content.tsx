import type { FC, PropsWithChildren } from "react";

interface ManageTaskTitleContentProps {
  title: string;
}

export const ManageTaskTitleContent: FC<
  PropsWithChildren<ManageTaskTitleContentProps>
> = ({ title, children }) => {
  return (
    <div className="manage-tasks-title-content">
      <div className="manage-tasks-title">{title}</div>
      {children}
    </div>
  );
};
