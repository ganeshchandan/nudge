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

  const scrollDragEvent = useRef<{
    isDraggingRef: boolean;
    startYRef: number;
    startScrollTopRef: number;
  }>({
    isDraggingRef: false,
    startYRef: 0,
    startScrollTopRef: 0,
  });

  const updateThumb = () => {
    const content = contentRef.current;
    const thumb = thumbRef.current;
    if (!content || !thumb) return;

    const containerHeight = content.clientHeight;
    const contentHeight = content.scrollHeight;

    const overflow = contentHeight > containerHeight;
    setHasOverflow(overflow);

    if (!overflow) return;

    const height = Math.max(
      (containerHeight / contentHeight) * containerHeight,
      20
    );
    setThumbHeight(height);

    const maxScrollTop = contentHeight - containerHeight;
    const maxThumbTop = containerHeight - height;

    thumb.style.top = `${(content.scrollTop / maxScrollTop) * maxThumbTop}px`;
  };

  const onMouseDown = (event: React.MouseEvent) => {
    const content = contentRef.current;
    if (!content) return;

    scrollDragEvent.current = {
      isDraggingRef: true,
      startYRef: event.clientY,
      startScrollTopRef: content.scrollTop,
    };
  };

  const onMouseMove = (event: any) => {
    const { isDraggingRef, startYRef, startScrollTopRef } =
      scrollDragEvent.current;
    if (!isDraggingRef) return;

    const content = contentRef.current;
    if (!content) return;

    const containerHeight = content.clientHeight;
    const contentHeight = content.scrollHeight;

    const maxScrollTop = contentHeight - containerHeight;
    const maxThumbTop = containerHeight - thumbHeight;

    const deltaY = event.clientY - startYRef;
    const scrollDelta = (deltaY / maxThumbTop) * maxScrollTop;

    content.scrollTop = startScrollTopRef + scrollDelta;
  };

  const onMouseUp = () => {
    scrollDragEvent.current = {
      isDraggingRef: false,
      startYRef: 0,
      startScrollTopRef: 0,
    };
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
    <div
      className={`overflow-container ${hasOverflow ? "has-overflow" : ""}`}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
    >
      <div ref={contentRef} className="overflow-content">
        {children}
      </div>

      <div className="scroll-bar">
        <div
          ref={thumbRef}
          className="thumb"
          style={{ height: thumbHeight }}
          onMouseDown={onMouseDown}
        />
      </div>
    </div>
  );
};
