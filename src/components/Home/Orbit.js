import React from "react";

// Each line traces a tilted ellipse. Rotating the plane between lines
// creates the layered silhouette without a canvas or animation loop.
const orbitLines = Array.from({ length: 92 }, (_, index) => {
  const rotation = (index * Math.PI) / 92;
  const path = Array.from({ length: 101 }, (_, step) => {
    const angle = (step * 2 * Math.PI) / 100;
    const x = 200 * Math.cos(angle);
    const y = 105 * Math.sin(angle);
    const projectedX = x * Math.cos(rotation) - y * Math.sin(rotation);
    const projectedY = x * Math.sin(rotation) + y * Math.cos(rotation);

    return `${(280 + projectedX + projectedY * 0.25).toFixed(1)},${(250 + projectedY * 0.82 + projectedX * 0.2).toFixed(1)}`;
  }).join(" L");

  return `M${path} Z`;
});

function Orbit() {
  return (
    <div className="orbit-art" aria-hidden="true">
      <div className="orbit-glow" />
      <svg viewBox="0 0 560 500" className="orbit-plot" fill="none" focusable="false">
        <defs>
          <linearGradient id="orbit-ink" x1="12%" y1="10%" x2="90%" y2="94%">
            <stop stopColor="#b38163" stopOpacity=".55" />
            <stop offset=".35" stopColor="#a46d4c" stopOpacity=".68" />
            <stop offset=".64" stopColor="#d0a787" stopOpacity=".8" />
            <stop offset="1" stopColor="#9a6a50" stopOpacity=".48" />
          </linearGradient>
        </defs>
        <g className="orbit-guides">
          <circle cx="280" cy="250" r="226" strokeDasharray="1 7" />
          <circle cx="280" cy="250" r="239" />
          <path d="M24 250h31m450 0h31M280 3v34m0 426v34" />
          <path d="M108 77h14m-7-7v14M438 423h14m-7-7v14" />
        </g>
        <g className="orbit-lines" stroke="url(#orbit-ink)" strokeWidth=".9">
          {orbitLines.map((path) => <path key={path} d={path} />)}
        </g>
        <g className="orbit-stars">
          <path d="M423 87v27m-13-13h26M121 347v18m-9-9h18M280 239v22m-11-11h22" />
          <circle cx="191" cy="67" r="3" />
          <circle cx="456" cy="328" r="3" />
          <circle cx="159" cy="413" r="2" />
        </g>
      </svg>
    </div>
  );
}

export default Orbit;
