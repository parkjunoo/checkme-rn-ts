import React from "react";
import Svg, { Path } from "react-native-svg";

interface CaretLeftProps {
  width?: number;
  height?: number;
  color?: string;
}

const CaretLeft: React.FC<CaretLeftProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M12.5 15L7.5 10L12.5 5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CaretLeft;
