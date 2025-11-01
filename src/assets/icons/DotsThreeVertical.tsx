import React from "react";
import Svg, { Circle } from "react-native-svg";

interface DotsThreeVerticalProps {
  width?: number;
  height?: number;
  color?: string;
}

const DotsThreeVertical: React.FC<DotsThreeVerticalProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Circle cx="10" cy="4" r="1.5" fill={color} />
    <Circle cx="10" cy="10" r="1.5" fill={color} />
    <Circle cx="10" cy="16" r="1.5" fill={color} />
  </Svg>
);

export default DotsThreeVertical;
