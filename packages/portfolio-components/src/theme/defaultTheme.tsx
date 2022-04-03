export type Color =
  | "text.primary"
  | "text.secondary"
  | "text.disabled"
  | "primary.main"
  | "primary.dark"
  | "primary.light"
  | "error.main"
  | "error.dark"
  | "error.light"
  | "success.main"
  | "success.dark"
  | "success.light"
  | "warning.main"
  | "warning.dark"
  | "warning.light"
  | "divider"
  | "common.black"
  | "common.white"
  | "grey.100"
  | "grey.200"
  | "grey.300"
  | "grey.400"
  | "grey.500"
  | "grey.600"
  | "grey.700"
  | "grey.800"
  | "grey.900"
  | "background.paper"
  | "background.default";

export type ColorTones = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type TextTones = {
  disabled: string;
  primary: string;
  secondary: string;
};

export type Palette = {
  mode: "light" | "dark";
  common: {
    white: string;
    black: string;
  };
  background: {
    paper: string;
    default: string;
  };
  grey: ColorTones;
  text: TextTones;
  divider: string;
  primary: ColorTones;
  success: ColorTones;
  info: ColorTones;
  warning: ColorTones;
  error: ColorTones;
};

const LightColorTones: Palette = {
  mode: "light",
  common: {
    white: "#fff",
    black: "#000",
  },
  divider: "#D6DEEE",
  background: {
    paper: "#FFF",
    default: "#eef0f6",
  },
  text: {
    primary: "#212121",
    secondary: "#666666",
    disabled: "#88888e",
  },
  grey: {
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  primary: {
    100: "#D6E4FF",
    200: "#ADC8FF",
    300: "#84A9FF",
    400: "#6690FF",
    500: "#3366FF",
    600: "#254EDB",
    700: "#1939B7",
    800: "#102693",
    900: "#091A7A",
  },
  success: {
    100: "#F5FDCF",
    200: "#E8FBA0",
    300: "#D5F470",
    400: "#BFEA4C",
    500: "#A1DD16",
    600: "#84BE10",
    700: "#699F0B",
    800: "#508007",
    900: "#3E6A04",
  },
  info: {
    100: "#D7FEF3",
    200: "#AFFDEF",
    300: "#87FBEF",
    400: "#38E8F4",
    500: "#38E8F4",
    600: "#28B9D1",
    700: "#1C8DAF",
    800: "#11668D",
    900: "#0A4A75",
  },
  warning: {
    100: "#FFF5D9",
    200: "#FFE9B3",
    300: "#FFDA8D",
    400: "#FFCB71",
    500: "#FFB342",
    600: "#DB8F30",
    700: "#B76E21",
    800: "#935115",
    900: "#7A3C0C",
  },
  error: {
    100: "#FFE5D6",
    200: "#FFC4AE",
    300: "#FF9C85",
    400: "#FF7667",
    500: "#FF3835",
    600: "#DB2633",
    700: "#B71A33",
    800: "#931030",
    900: "#7A0A2F",
  },
};

const DarkColorTones: Palette = {
  mode: "dark",
  common: {
    white: "#fff",
    black: "#000",
  },
  divider: "#101426",
  background: {
    paper: "#181F36",
    default: "#0D1220",
  },
  text: {
    primary: "#FFFFFF",
    secondary: "#B8B8B8",
    disabled: "#A3A5AF",
  },
  grey: {
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },
  primary: {
    100: "#D6E4FF",
    200: "#ADC8FF",
    300: "#84A9FF",
    400: "#6690FF",
    500: "#3366FF",
    600: "#254EDB",
    700: "#1939B7",
    800: "#102693",
    900: "#091A7A",
  },
  success: {
    100: "#F5FDCF",
    200: "#E8FBA0",
    300: "#D5F470",
    400: "#BFEA4C",
    500: "#A1DD16",
    600: "#84BE10",
    700: "#699F0B",
    800: "#508007",
    900: "#3E6A04",
  },
  info: {
    100: "#D7FEF3",
    200: "#AFFDEF",
    300: "#87FBEF",
    400: "#38E8F4",
    500: "#38E8F4",
    600: "#28B9D1",
    700: "#1C8DAF",
    800: "#11668D",
    900: "#0A4A75",
  },
  warning: {
    100: "#FFF5D9",
    200: "#FFE9B3",
    300: "#FFDA8D",
    400: "#FFCB71",
    500: "#FFB342",
    600: "#DB8F30",
    700: "#B76E21",
    800: "#935115",
    900: "#7A3C0C",
  },
  error: {
    100: "#FFE5D6",
    200: "#FFC4AE",
    300: "#FF9C85",
    400: "#FF7667",
    500: "#FF3835",
    600: "#DB2633",
    700: "#B71A33",
    800: "#931030",
    900: "#7A0A2F",
  },
};

export type ThemeColor = {
  light: string;
  main: string;
  dark: string;
};

export type ThemeMode = "light" | "dark";

export type PaletteTheme = {
  mode: ThemeMode;
  common: {
    white: string;
    black: string;
  };
  background: {
    paper: string;
    default: string;
  };
  grey: ColorTones;
  text: TextTones;
  divider: string;
  primary: ThemeColor;
  success: ThemeColor;
  info: ThemeColor;
  warning: ThemeColor;
  error: ThemeColor;
};

export const getPalette = (
  lightTone = 300,
  mainTone = 500,
  darkTone = 800,
  PaletteImpl: Palette = LightColorTones
): PaletteTheme => {
  const light = lightTone as keyof ColorTones;
  const main = mainTone as keyof ColorTones;
  const dark = darkTone as keyof ColorTones;

  return {
    mode: PaletteImpl.mode,
    text: PaletteImpl.text,
    divider: PaletteImpl.divider,
    grey: PaletteImpl.grey,
    common: PaletteImpl.common,
    background: PaletteImpl.background,
    primary: {
      light: PaletteImpl.primary[light],
      main: PaletteImpl.primary[main],
      dark: PaletteImpl.primary[dark],
    },
    success: {
      light: PaletteImpl.success[light],
      main: PaletteImpl.success[main],
      dark: PaletteImpl.success[dark],
    },
    info: {
      light: PaletteImpl.info[light],
      main: PaletteImpl.info[main],
      dark: PaletteImpl.info[dark],
    },
    warning: {
      light: PaletteImpl.warning[light],
      main: PaletteImpl.warning[main],
      dark: PaletteImpl.warning[dark],
    },
    error: {
      light: PaletteImpl.error[light],
      main: PaletteImpl.error[main],
      dark: PaletteImpl.error[dark],
    },
  };
};

export interface Theme {
  palette: PaletteTheme;
}

export const getTheme = (
  mode: ThemeMode = "light",
  lightTone = 300,
  mainTone = 500,
  darkTone = 800
): Theme => {
  const paletteTones = mode === "light" ? LightColorTones : DarkColorTones;
  return {
    palette: getPalette(lightTone, mainTone, darkTone, paletteTones),
  };
};

export type StyleThemeCallback = (theme?: Theme) => React.CSSProperties;
export type ClassThemeCallback = (theme?: Theme) => string;
