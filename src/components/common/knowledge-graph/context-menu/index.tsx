import { memo } from "react";
import type { Node } from "@components/common/knowledge-graph/types";
import { EventClosingIcon, ClusterIcon } from "@assets/images";

interface ContextMenuProps {
  node: Node;
}

export const ContextMenu = memo(({ node }: ContextMenuProps) => {
  const { x, y } = node;
  return (
    <div
      className="graph-node-context-menu"
      style={{
        left: `calc(${x!}px - var(--graph-node-size) / 2 - 25px)`,
        top: `calc(${y!}px - var(--graph-node-size) / 2 - 25px)`,
      }}
    >
      <EventClosingIcon className="context-menu-icon speakaer-icon" />
      <ClusterIcon className="context-menu-icon drill-down-icon" />
    </div>
  );
});
