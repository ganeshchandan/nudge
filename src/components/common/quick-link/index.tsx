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
  selectedId?: string;
  onLinkSelect?: (quickLink: string) => void;
}

export const QuickLinks: FC<QuickLinksProps> = ({
  className = "",
  headerName,
  quickLinks,
  selectedId: controlledSelectedId,
  onLinkSelect,
}) => {
  const [internalSelectedId, setInternalSelectedId] = useState<string>(quickLinks[0]?.id || "");
  const [indicatorTop, setIndicatorTop] = useState<number>(0);

  // Use controlled selectedId if provided, otherwise use internal state
  const selectedId = controlledSelectedId !== undefined ? controlledSelectedId : internalSelectedId;

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Sync internal state when quickLinks change
  useEffect(() => {
    if (quickLinks.length > 0 && !quickLinks.find(link => link.id === selectedId)) {
      setInternalSelectedId(quickLinks[0].id);
    }
  }, [quickLinks, selectedId]);

  useEffect(() => {
    const selectedEl = itemRefs.current[selectedId];
    if (selectedEl) {
      const top = selectedEl.offsetTop + selectedEl.offsetHeight / 2 - 8;
      setIndicatorTop(top);
    }
  }, [selectedId]);

  const onSelect = (id: string) => {
    if (controlledSelectedId === undefined) {
      setInternalSelectedId(id);
    }
    onLinkSelect?.(id);
  };

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
            onClick={() => onSelect(id)}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
