import type { FC } from "react";

export const ScoreCardOverview: FC = () => {
  const cards = [
    {
      title: "Cold → Warm",
      count: "06",
      label: "Leads",
      emoji: "😊",
      gradient:
        "linear-gradient(rgba(99, 180, 255, 0.59) 4.5045%, rgba(157, 126, 253, 0.16) 27.157%, rgba(255, 255, 255, 0) 49.55%), linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)",
    },
    {
      title: "Warm → Hot",
      count: "03",
      label: "Active Conversations",
      emoji: "🤩",
      gradient:
        "linear-gradient(rgba(99, 180, 255, 0.59) 4.5045%, rgba(157, 126, 253, 0.16) 27.157%, rgba(255, 255, 255, 0) 49.55%), linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)",
    },
    {
      title: "Cold Unresponsiveness",
      count: "06",
      label: "Leads",
      emoji: "😨",
      gradient:
        "linear-gradient(rgba(99, 180, 255, 0.59) 4.5045%, rgba(157, 126, 253, 0.16) 27.157%, rgba(255, 255, 255, 0) 49.55%), linear-gradient(90deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.7) 100%)",
      hasAlert: true,
    },
  ];

  return (
    <div className="score-card-overview">
      <h2 className="section-title">Score Card Overview</h2>
      <div className="sentiment-icons">
        <div className="sentiment-icon">
          <span className="emoji">🤩</span>
          <span className="label">Hot</span>
        </div>
        <div className="sentiment-icon">
          <span className="emoji">😊</span>
          <span className="label">Warm</span>
        </div>
        <div className="sentiment-icon">
          <span className="emoji">😨</span>
          <span className="label">Cold</span>
        </div>
      </div>
      <div className="overview-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="overview-card"
            style={{ background: card.gradient }}
          >
            {card.hasAlert && <div className="alert-dot" />}
            <div className="card-content-wrapper">
              <div className="card-title">{card.title}</div>
              <div className="card-count">{card.count}</div>
              <div className="card-label">{card.label}</div>
            </div>
            <span className="card-emoji">{card.emoji}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
