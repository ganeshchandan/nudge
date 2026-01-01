import { TASK_LIST_COLUMNS } from "@components/engagement-plan/constants";

export const TaskTableHeader = () => {
  return (
    <div className="header-row header-content-row-common">
      {TASK_LIST_COLUMNS.map(({ headerName, field, className = "" }) => (
        <div
          key={field}
          className={`header-row-cell header-content-row-cell ${className}`}
        >
          {headerName}
        </div>
      ))}
    </div>
  );
};
