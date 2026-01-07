import { type FC } from "react";
import "@components/common/one-minute-summary/index.scss";
import type { OneMinuteSummaryProps } from "./types";

export const OneMinuteSummary: FC<OneMinuteSummaryProps> = ({
  title = "1 Minute Summary",
  points = [],
  className = "",
}) => {
  const gap = 4;
  const cardHeight = 70;

  if (!points || points.length === 0) {
    return null;
  }

  const totalItems = points.length;

  // Calculate row distribution upfront
  const getRowDistribution = () => {
    const rows: number[][] = [];
    
    // Row 1: always 4 items (or all items if <= 4)
    if (totalItems <= 4) {
      return [[...Array(totalItems).keys()]];
    }
    
    rows.push([0, 1, 2, 3]); // Row 1
    
    const remainingItems = totalItems - 4;
    
    // If remaining items <= 3, put them all in row 2
    if (remainingItems <= 3) {
      const row2 = [];
      for (let i = 4; i < totalItems; i++) {
        row2.push(i);
      }
      rows.push(row2);
      return rows;
    }
    
    // Distribute remaining items in rows of 3
    // If last row would have 1 item, redistribute to avoid orphan
    const numFullRows = Math.floor(remainingItems / 3);
    const remainder = remainingItems % 3;
    
    let currentIndex = 4;
    
    // Add full rows of 3
    for (let i = 0; i < numFullRows; i++) {
      const row = [];
      for (let j = 0; j < 3; j++) {
        row.push(currentIndex++);
      }
      rows.push(row);
    }
    
    // Handle remainder - NEVER create a row with just 1 item
    if (remainder === 1) {
      if (numFullRows > 0) {
        // Add orphan to previous row (making it 4 items)
        const lastRow = rows[rows.length - 1];
        lastRow.push(currentIndex++);
      } else {
        // This shouldn't happen because remainingItems <= 3 is handled above
        // But if it does, add as single item row
        rows.push([currentIndex++]);
      }
    } else if (remainder === 2) {
      // Add 2 items as new row
      const row = [];
      row.push(currentIndex++);
      row.push(currentIndex++);
      rows.push(row);
    }
    // If remainder === 0, we're done (all items already in full rows)
    
    return rows;
  };

  const rows = getRowDistribution();

  const getItemStyle = (index: number) => {
    // Find which row this item belongs to
    let rowIndex = -1;
    let colIndex = -1;
    
    for (let i = 0; i < rows.length; i++) {
      const colIdx = rows[i].indexOf(index);
      if (colIdx !== -1) {
        rowIndex = i;
        colIndex = colIdx;
        break;
      }
    }
    
    if (rowIndex === -1) {
      // Fallback
      return {
        width: '100%',
        left: '0px',
        top: '0px',
      };
    }
    
    const itemsInRow = rows[rowIndex].length;
    const topPosition = (cardHeight + gap) * rowIndex;
    
    // Row 1: 4 items at 25% each
    if (rowIndex === 0 && itemsInRow === 4) {
      const gapAdjust = (3 * gap) / 4;
      return {
        width: `calc(25% - ${gapAdjust}px)`,
        left: `calc(${colIndex * 25}% + ${colIndex * gap}px)`,
        top: `${topPosition}px`,
      };
    }
    
    // Row 1 with 5 items (when orphan redistributed)
    if (rowIndex === 0 && itemsInRow === 5) {
      const gapAdjust = (4 * gap) / 5;
      return {
        width: `calc(20% - ${gapAdjust}px)`,
        left: `calc(${colIndex * 20}% + ${colIndex * gap}px)`,
        top: `${topPosition}px`,
      };
    }
    
    // Last row with 1 item: 40% width
    if (itemsInRow === 1) {
      return {
        width: '40%',
        left: '0px',
        top: `${topPosition}px`,
      };
    }
    
    // Row with 4 items (when orphan redistributed to a non-first row)
    if (itemsInRow === 4 && rowIndex > 0) {
      const gapAdjust = (3 * gap) / 4;
      return {
        width: `calc(25% - ${gapAdjust}px)`,
        left: `calc(${colIndex * 25}% + ${colIndex * gap}px)`,
        top: `${topPosition}px`,
      };
    }
    
    // Last row with 2 items: 70% and 30%
    if (itemsInRow === 2) {
      const gapAdjust = gap / 2;
      if (colIndex === 0) {
        return {
          width: `calc(70% - ${gapAdjust}px)`,
          left: '0px',
          top: `${topPosition}px`,
        };
      } else {
        return {
          width: `calc(30% - ${gapAdjust}px)`,
          left: `calc(70% + ${gap}px)`,
          top: `${topPosition}px`,
        };
      }
    }
    
    // Default: 3 items at 33.33% each
    const gapAdjust = (2 * gap) / 3;
    return {
      width: `calc(${colIndex === 2 ? 33.34 : 33.33}% - ${gapAdjust}px)`,
      left: `calc(${colIndex * 33.33}% + ${colIndex * gap}px)`,
      top: `${topPosition}px`,
    };
  };

  const containerHeight = rows.length === 1 
    ? cardHeight 
    : (cardHeight + gap) * rows.length - gap;

  return (
    <div className={`one-minute-summary ${className}`}>
      <h2 className="one-minute-summary-title">{title}</h2>
      <div 
        className="one-minute-summary-grid"
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: `${containerHeight}px` 
        }}
      >
        {points.map((point, index) => (
          <div
            key={point.id}
            className="one-minute-summary-card"
            style={{
              position: 'absolute',
              ...getItemStyle(index),
              height: `${cardHeight}px`,
            }}
          >
            <h3 className="one-minute-summary-card-title">{point.title}</h3>
            <p className="one-minute-summary-card-description">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
