import React, { memo } from "react";
import { ANIMATION_DELAYS } from "@components/common/orbit/constants";
import "@components/common/orbit/orbit-level/person-node.scss";
import type {
  Person,
  OrbitConfig,
  CSSPropertiesWithVars,
} from "@components/common/orbit/types";

interface PersonNodeProps {
  person: Person;
  config: OrbitConfig;
  nodeIndex?: number;
  levelAnimationOrder?: number; // 0 = outermost level (animates first)
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  className?: string;
}

const PersonNode: React.FC<PersonNodeProps> = memo(
  ({
    person,
    config,
    nodeIndex = 0,
    levelAnimationOrder = 0,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className = "",
  }) => {
    const initials =
      (person.name || "")
        .split(" ")
        .map((p) => p.charAt(0))
        .filter(Boolean)
        .slice(0, 2)
        .join("")
        .toUpperCase() || "?";

    // Calculate total delay: level delay + node delay within level
    const levelDelay = levelAnimationOrder * ANIMATION_DELAYS.LEVEL_DELAY;
    const nodeDelay = nodeIndex * ANIMATION_DELAYS.NODE_DELAY;
    const totalDelay = levelDelay + nodeDelay;

    const wrapperStyle: CSSPropertiesWithVars = {
      cursor: onClick ? "pointer" : "default",
      "--total-delay": `${totalDelay}s`, // Set on wrapper so country code can access it
      "--animation-duration": `${ANIMATION_DELAYS.ANIMATION_DURATION}s`,
    };

    const nodeStyle: CSSPropertiesWithVars = {
      width: `${config.visual.nodeSize}px`,
      height: `${config.visual.nodeSize}px`,
      backgroundColor: config.visual.nodeBackgroundColor,
      color: config.visual.nodeTextColor,
      "--node-index": nodeIndex,
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!onClick) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick();
      }
    };

    return (
      <div
        className={`person-node-wrapper ${className}`}
        onClick={onClick ? () => onClick() : undefined}
        onMouseEnter={onMouseEnter ? () => onMouseEnter() : undefined}
        onMouseLeave={onMouseLeave ? () => onMouseLeave() : undefined}
        onKeyDown={handleKeyDown}
        tabIndex={onClick ? 0 : undefined}
        role={onClick ? "button" : undefined}
        style={wrapperStyle}
        aria-label={person.name}
      >
        <div className={`person-node`} style={nodeStyle}>
          {person.avatar ? (
            <img
              src={person.avatar}
              alt={person.name}
              className="person-avatar"
              loading="lazy"
            />
          ) : (
            <div className="person-initials">{initials}</div>
          )}
          <div className="person-name">{person.name}</div>
          {person.role && <div className="person-role">{person.role}</div>}
        </div>
        {person.countryCode && (
          <div className="person-country-code">{person.countryCode}</div>
        )}
      </div>
    );
  }
);

PersonNode.displayName = "PersonNode";

export default PersonNode;
