import "./index.scss";

const WhereAMI = [
  {
    month: "2025 | Dec",
    hot: "03",
    warm: "03",
    cold: "03",
  },
  {
    month: "2026 | Jan (Current)",
    hot: "03",
    warm: "03",
    cold: "03",
  },
];

export const LeadStatusLists = () => {
  return (
    <div className="lead-status-lists">
      <div className="lead-status-table-headers">
        <div className="lead-status-table-header-cell"></div>
        <div className="lead-status-table-header-cell">🤩</div>
        <div className="lead-status-table-header-cell">😊</div>
        <div className="lead-status-table-header-cell">😨</div>
      </div>
      <div className="lead-status-table-content">
        {WhereAMI.map(({ month, hot, warm, cold }) => (
          <div className="lead-status-table-content-row">
            <div className="lead-status-table-row-cell row-cell-flex-start">
              {month}
            </div>
            <div className="lead-status-table-row-cell">{hot}</div>
            <div className="lead-status-table-row-cell">{warm}</div>
            <div className="lead-status-table-row-cell">{cold}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
