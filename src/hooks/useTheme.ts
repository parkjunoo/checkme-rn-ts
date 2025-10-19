import { useState, useEffect } from "react";
import { useTheme as useTamaguiTheme } from "@tamagui/core";

export type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>("light");
  const tamaguiTheme = useTamaguiTheme();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return {
    theme,
    toggleTheme,
    colors: tamaguiTheme,
    isDark: theme === "dark",
  };
};
