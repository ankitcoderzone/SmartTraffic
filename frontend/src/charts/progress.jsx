import React, { useState, useEffect } from "react";

const CircularProgress = ({ value, size = 80, strokeWidth = 10, color = "#1D3557" }) => {
  const numericValue = typeof value === "string" ? parseInt(value) : value;

  const [progress, setProgress] = useState(0); // animate from 0

  useEffect(() => {
    let start = 0;
    const increment = numericValue / 50; // adjust speed
    const interval = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(interval);
      }
      setProgress(start);
    }, 20); // 20ms per tick

    return () => clearInterval(interval);
  }, [numericValue]);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#E5E7EB"
        strokeWidth={strokeWidth}
        fill="none"
      />
      {/* Progress circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color} // dynamic color
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        strokeLinecap="round"
      />
      {/* Center text */}
      <text
        x="50%"
        y="50%"
        dy="0.3em"
        textAnchor="middle"
        className="font-semibold text-sm"
        transform={`rotate(90, ${size / 2}, ${size / 2})`}
      >
        {Math.round(progress)}%
      </text>
    </svg>
  );
};

export default CircularProgress;

