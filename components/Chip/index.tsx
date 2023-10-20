import { hexToRgbWithOpacity } from "@/utils/rgbToHex";
import React from "react";

const borderOpacity = 0.3;
const bgOpacity = 0.18;
const textOpacity = 0.87;

const Chip: React.FC<ChipProps> = ({
  color,
  variant = "default",
  label,
  className,
}) => {
  const getStyles = () => {
    switch (variant) {
      case "default":
        return {
          borderColor: `${hexToRgbWithOpacity(color, borderOpacity)}`,
          backgroundColor: `${hexToRgbWithOpacity(color, bgOpacity)}`,
          color: `${hexToRgbWithOpacity(color, textOpacity)}`,
        };
      case "outlined":
        return {
          borderColor: `${hexToRgbWithOpacity(color, borderOpacity)}`,
          color: `${hexToRgbWithOpacity(color, textOpacity)}`,
        };
      case "filled":
        return {
          backgroundColor: `${hexToRgbWithOpacity(color, 1)}`,
          color: `${hexToRgbWithOpacity(color, 1)}`,
          borderColor: `${hexToRgbWithOpacity(color, 1)}`,
        };
    }
  };

  return (
    <div
      style={getStyles()}
      className={`px-[7px] inline-flex text-xs leading-normal font-semibold rounded-3xl whitespace-nowrap border ${className}`}
    >
      {label}
    </div>
  );
};

export default Chip;
