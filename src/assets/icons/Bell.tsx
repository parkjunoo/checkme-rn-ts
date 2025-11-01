import React from "react";
import Svg, { Path } from "react-native-svg";

interface BellProps {
  width?: number;
  height?: number;
  color?: string;
}

const Bell: React.FC<BellProps> = ({
  width = 20,
  height = 20,
  color = "currentColor",
}) => (
  <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
    <Path
      d="M8.5 3.5C8.5 2.67157 9.17157 2 10 2C10.8284 2 11.5 2.67157 11.5 3.5V4.5"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <Path
      d="M3 8.5C3 6.01472 5.01472 4 7.5 4H12.5C14.9853 4 17 6.01472 17 8.5V11.5C17 12.3284 16.3284 13 15.5 13H4.5C3.67157 13 3 12.3284 3 11.5V8.5Z"
      stroke={color}
      strokeWidth="1.5"
    />
    <Path
      d="M7 13V14.5C7 15.3284 7.67157 16 8.5 16H11.5C12.3284 16 13 15.3284 13 14.5V13"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </Svg>
);

export default Bell;
