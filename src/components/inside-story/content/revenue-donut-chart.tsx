import React from 'react';

interface DataSegment {
  name: string;
  value: number;
  color: string;
}

export const RevenueDonutChart: React.FC = () => {
  const data: DataSegment[] = [
    { name: 'Others', value: 10, color: '#B3B3B3' },
    { name: 'USA', value: 21, color: '#A8D98F' },
    { name: 'EMEA', value: 39, color: '#FFB366' },
    { name: 'China', value: 16, color: '#CCCCCC' },
    { name: 'Japan', value: 9, color: '#FFD966' },
    { name: 'LatAm', value: 10, color: '#99CCFF' }
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <div style={{
        position: 'relative',
        width: '325px',
        height: '225px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
          <svg width="200" height="200" viewBox="0 0 400 400">
            <g transform="translate(200, 200)">
              {data.map((segment, index) => {
                const startAngle = data.slice(0, index).reduce((sum, s) => sum + s.value, 0) * 3.6;
                const endAngle = startAngle + segment.value * 3.6;
                const largeArcFlag = segment.value > 50 ? 1 : 0;
                
                const startRad = (startAngle - 90) * Math.PI / 180;
                const endRad = (endAngle - 90) * Math.PI / 180;
                
                const innerRadius = 100;
                const outerRadius = 160;
                
                const x1 = Math.cos(startRad) * outerRadius;
                const y1 = Math.sin(startRad) * outerRadius;
                const x2 = Math.cos(endRad) * outerRadius;
                const y2 = Math.sin(endRad) * outerRadius;
                const x3 = Math.cos(endRad) * innerRadius;
                const y3 = Math.sin(endRad) * innerRadius;
                const x4 = Math.cos(startRad) * innerRadius;
                const y4 = Math.sin(startRad) * innerRadius;
                
                const pathData = [
                  `M ${x1} ${y1}`,
                  `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                  `L ${x3} ${y3}`,
                  `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
                  'Z'
                ].join(' ');
                
                return (
                  <path
                    key={segment.name}
                    d={pathData}
                    fill={segment.color}
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              })}
            </g>
          </svg>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center'
          }}>
            <div style={{
              fontSize: '10px',
              color: '#707070',
              fontWeight: 400,
              marginBottom: '2.5px',
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}>
              FY 2026
            </div>
            <div style={{
              fontSize: '21px',
              fontWeight: 700,
              color: '#343434',
              fontFamily: 'IBM Plex Sans, sans-serif'
            }}>
              €19.3bn
            </div>
          </div>
        </div>

        {/* Legend items positioned at the center of each wedge */}
        {data.map((segment, index) => {
          // Calculate the center angle of this wedge
          const startAngle = data.slice(0, index).reduce((sum, s) => sum + s.value, 0) * 3.6;
          const endAngle = startAngle + segment.value * 3.6;
          const centerAngle = (startAngle + endAngle) / 2;
          
          // Convert to radians (subtract 90 to start from top)
          const angleRad = (centerAngle - 90) * Math.PI / 180;
          
          // Position at radius 110px from center (120px for Others)
          const radius = segment.name === 'Others' ? 120 : 110;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;
          
          // Center of chart is at 162.5px from left and 112.5px from top
          // Move Others further to the right and down
          const leftPos = 162.5 + x + (segment.name === 'Others' ? 20 : 0);
          const topPos = 112.5 + y + (segment.name === 'Others' ? 20 : 0);
          
          return (
            <div key={segment.name} style={{
              position: 'absolute',
              left: `${leftPos}px`,
              top: `${topPos}px`,
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px'
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: segment.color,
                flexShrink: 0,
                marginTop: '1.5px'
              }} />
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0px',
                whiteSpace: 'nowrap'
              }}>
                <div style={{
                  fontSize: '7.5px',
                  color: '#707070',
                  fontWeight: 400,
                  lineHeight: '1.2',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}>
                  {segment.name}
                </div>
                <div style={{
                  fontSize: '10px',
                  color: '#343434',
                  fontWeight: 700,
                  lineHeight: '1.2',
                  fontFamily: 'IBM Plex Sans, sans-serif'
                }}>
                  {segment.value}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

