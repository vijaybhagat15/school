import React from "react";

const GeometricBackground: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <rect width="800" height="600" fill="white" />

      {/* Dark Blue Circle */}
      <circle cx="150" cy="150" r="80" fill="#1e3a8a" />

      {/* Bright Blue Rectangle */}
      <rect
        x="500"
        y="100"
        width="120"
        height="120"
        fill="#2563eb"
        transform="rotate(20, 560, 160)"
      />

      {/* Red Triangle */}
      <polygon points="300,500 400,350 500,500" fill="#b91c1c" />

      {/* Light Blue Ellipse */}
      <ellipse cx="650" cy="450" rx="90" ry="50" fill="#2563eb" opacity="0.8" />

      {/* Small White Circle Outline */}
      <circle cx="350" cy="250" r="40" stroke="#1e3a8a" strokeWidth="5" fill="none" />
    </svg>
  );
};

export default GeometricBackground;
