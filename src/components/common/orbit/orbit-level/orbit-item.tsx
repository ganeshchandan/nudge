import React, {
  useState,
  useEffect,
  useRef,
  type ReactNode,
  type CSSProperties,
} from "react";
import { DEFAULT_NODE_SIZE } from "@components/common/orbit/constants";

interface OrbitItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  startAngle?: number;
  anglePerStep?: number;
  timeBetweenSteps?: number;
  direction?: "clockwise" | "counter-clockwise";
  isRotating?: boolean;
  orbitRadius?: number;
  onClick?: () => void;
}

const OrbitItem: React.FC<OrbitItemProps> = ({
  children,
  className = "",
  style = {},
  startAngle = 0,
  anglePerStep = 0.2,
  timeBetweenSteps = 16,
  direction = "clockwise",
  isRotating = false,
  orbitRadius = 250,
  onClick,
  ...rest
}) => {
  const [currentAngle, setCurrentAngle] = useState(startAngle);
  const itemRef = useRef<HTMLDivElement>(null);
  const [itemSize, setItemSize] = useState({ width: 0, height: 0 });

  // Update item size when it renders
  useEffect(() => {
    if (!itemRef.current) return;

    const updateSize = () => {
      if (itemRef.current) {
        const rect = itemRef.current.getBoundingClientRect();
        setItemSize({ width: rect.width, height: rect.height });
      }
    };

    // Initial measurement
    updateSize();

    // Use ResizeObserver if available for better accuracy
    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(updateSize);
      resizeObserver.observe(itemRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }

    return undefined;
  }, []);

  // Rotation logic
  useEffect(() => {
    if (!isRotating || anglePerStep === 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentAngle((prevAngle) => {
        if (direction === "clockwise") {
          return (prevAngle + anglePerStep) % 360;
        } else {
          return (prevAngle - anglePerStep + 360) % 360;
        }
      });
    }, timeBetweenSteps);

    return () => clearInterval(interval);
  }, [isRotating, anglePerStep, timeBetweenSteps, direction]);

  // Calculate position on circle
  const angleInRadians = (currentAngle * Math.PI) / 180;
  const centerX = orbitRadius + orbitRadius * Math.cos(angleInRadians);
  const centerY = orbitRadius + orbitRadius * Math.sin(angleInRadians);

  // Center the item on the calculated position
  // Use a default size if not yet measured
  const itemWidth = itemSize.width || DEFAULT_NODE_SIZE;
  const itemHeight = itemSize.height || DEFAULT_NODE_SIZE;
  const left = centerX - itemWidth / 2;
  const top = centerY - itemHeight / 2;

  return (
    <div
      ref={itemRef}
      className={className}
      style={{
        position: "absolute",
        left: `${left}px`,
        top: `${top}px`,
        cursor: onClick ? "pointer" : "default",
        zIndex: 3,
        ...style,
      }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default OrbitItem;
