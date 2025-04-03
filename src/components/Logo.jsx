
import React from "react";

export function Logo() {
  return (
    <div className="logo-container">
      <div className="border">
        <svg viewBox="0 0 300 100">
          <rect x="5" y="5" width="290" height="90" className="line" />
        </svg>
      </div>
      <div className="logo-text">NBTech</div>
      <div className="tagline">Empowering Digital Futures</div>
    </div>
  );
}
