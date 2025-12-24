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
  const [hasOverflow, setHasOverflow] = useState(false);

  const updateThumb = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    if (!content || !thumb) return;

    const containerHeight = content.clientHeight;
    const contentHeight = content.scrollHeight;

    const overflow = contentHeight > containerHeight;
    setHasOverflow(overflow);

    if (!overflow) return;

    // Thumb height proportional to visible area
    const height = Math.max(
      (containerHeight / contentHeight) * containerHeight,
      20
    );
    setThumbHeight(height);

    // Thumb position
    const maxScrollTop = contentHeight - containerHeight;
    const maxThumbTop = containerHeight - height;

    thumb.style.top = `${(content.scrollTop / maxScrollTop) * maxThumbTop}px`;
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
    <div className={`overflow-container ${hasOverflow ? "has-overflow" : ""}`}>
      <div ref={contentRef} className="overflow-content">
        {children}
      </div>

      <div className="scroll-bar">
        <div ref={thumbRef} className="thumb" style={{ height: thumbHeight }} />
      </div>
    </div>
  );
};
