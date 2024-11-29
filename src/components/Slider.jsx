import React, { useState } from "react";
import "./Slider.css";

const Slider = ({onChange}) => {
  const [value, setValue] = useState(0);

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider-track">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`slider-step ${value === index ? "active" : ""}`}
            style={{
              position: "absolute",
              left: `${(index / 4) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            {value === index && (
              <div className="step-label">{index}</div>
            )}
          </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="4"
        value={value}
        onChange={handleChange}
        className="slider-input"
        style={{
          background: `linear-gradient(to right, #fc7457 ${(value / 4) * 100}%, #ccc ${(value / 4) * 100}%)`,
        }}
      />
    </div>
  );
};

export default Slider;
