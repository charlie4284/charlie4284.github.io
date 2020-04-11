import { useState, createContext } from "react";
import * as color from "../../assets/color";

export const LightThemeColors: ThemeType = {
  Background: color.backgroundGrey,
  Primary: color.darkBlueGrey,
  Secondary: color.lightBlue,
  Tertiary: color.lightBlueGrey,
  Text: "#242424",
};

interface ThemeType {
  Background: string;
  Primary: string;
  Secondary: string;
  Tertiary: string;
  Text: string;
}

type ThemeContextType = {
  theme: ThemeType;
  setTheme: any;
};

export function useTheme() {
  const [theme, setTheme] = useState(LightThemeColors);
  return { theme, setTheme };
}

const defaultTheme: ThemeContextType = {
  theme: LightThemeColors,
  setTheme: null,
};

export const ThemeCtx = createContext(defaultTheme);
