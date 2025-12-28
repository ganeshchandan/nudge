import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import "@components/common/quick-link/index.scss";

export interface QuickLink {
  name: string;
  id: string;
}

interface QuickLinksProps {
  className?: string;
  headerName: string;
  quickLinks: QuickLink[];
}

export const QuickLinks: FC<QuickLinksProps> = ({
  className = "",
  headerName,
  quickLinks,
}) => {
  const [selectedId, setSelectedId] = useState<string>(quickLinks[0]?.id);
  const [indicatorTop, setIndicatorTop] = useState<number>(0);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const selectedEl = itemRefs.current[selectedId];
    if (selectedEl) {
      const top = selectedEl.offsetTop + selectedEl.offsetHeight / 2 - 8;
      setIndicatorTop(top);
    }
  }, [selectedId]);

  return (
    <div className={`quick-links-container ${className}`}>
      <div className="selected-indicator-container">
        <div className="selected-indicator" style={{ top: indicatorTop }} />
      </div>
      <div className="quick-links-header-name">{headerName}</div>
      <div className="quick-links">
        {quickLinks.map(({ name, id }) => (
          <div
            key={id}
            ref={(el) => {
              itemRefs.current[id] = el;
            }}
            className={`quick-link ${id === selectedId ? "active" : ""}`}
            onClick={() => setSelectedId(id)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
