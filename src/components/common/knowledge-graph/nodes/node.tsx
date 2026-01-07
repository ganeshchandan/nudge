import type { Node } from "@components/common/knowledge-graph/types";
import { ProfileIcon } from "@components/common";
import { memo, useState } from "react";

interface GraphNodeProps {
  node: Node;
  onDrag: (node: Node, x: number, y: number) => void;
  handleNodeClick: (node: Node | null) => void;
}

export const GraphNode = memo(
  ({ node, onDrag, handleNodeClick }: GraphNodeProps) => {
    const [dragging, setDragging] = useState(false);
    const { image, name, x, y } = node;

    const handleMouseDown = (event: React.MouseEvent) => {
      event.preventDefault();
      setDragging(true);
      const startX = event.clientX;
      const startY = event.clientY;
      const originX = x!;
      const originY = y!;

      const handleMouseMove = (moveEvent: MouseEvent) => {
        const dx = moveEvent.clientX - startX;
        const dy = moveEvent.clientY - startY;
        onDrag(node, originX + dx, originY + dy);
      };

      const handleMouseUp = () => {
        setDragging(false);
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };

    const onNodeClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
      event.stopPropagation();
      event.preventDefault();
      handleNodeClick(node);
    };

    return (
      <div
        className="graph-node"
        onMouseDown={handleMouseDown}
        onClick={onNodeClick}
      >
        <ProfileIcon
          className="graph-node-image"
          style={{
            left: `calc(${x!}px - var(--graph-node-size) / 2)`,
            top: `calc(${y!}px - var(--graph-node-size) / 2)`,
            cursor: dragging ? "grabbing" : "grab",
          }}
          image={image}
        />
        <div
          className="node-label"
          style={{
            left: x!,
            top: `calc(${y!}px + var(--graph-node-size) /2  + 5px)`,
            cursor: dragging ? "grabbing" : "grab",
          }}
        >
          {name}
        </div>
      </div>
    );
  }
);
