import {
  useRef,
  useEffect,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";
import "@components/common/overflow-container/index.scss";

export const OverflowContainer: FC<PropsWithChildren> = ({ children }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const [thumbHeight, setThumbHeight] = useState(20);

  const updateThumb = () => {
    const content = contentRef.current;
    if (!content) return;

    const containerHeight = content.clientHeight;
    const contentHeight = content.scrollHeight;

    // Thumb height proportional to content
    const height = Math.max(
      (containerHeight / contentHeight) * containerHeight,
      20
    );
    setThumbHeight(height);

    // Update thumb position
    if (thumbRef.current) {
      thumbRef.current.style.top = `${
        (content.scrollTop / contentHeight) * containerHeight
      }px`;
    }
  };

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    updateThumb();
    content.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);

    return () => {
      content.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [children]);

  return (
    <div className="overflow-container">
      <div ref={contentRef} className="overflow-content">
        {children}
      </div>
      <div className="scroll-bar">
        <div ref={thumbRef} className="thumb" style={{ height: thumbHeight }} />
      </div>
    </div>
  );
};
