import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface MagnifyingGlassProps {
  width?: number;
  height?: number;
  color?: string;
}

const MagnifyingGlass: React.FC<MagnifyingGlassProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Circle cx="9" cy="9" r="6" stroke={color} strokeWidth="1.5" />
    <Path
      d="M16 16L13.5 13.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default MagnifyingGlass;
