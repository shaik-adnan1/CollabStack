const palette = {
  // Brand
  lime50: "#F4FCDC",
  lime100: "#E6F89E",
  lime300: "#D2F26B",
  lime400: "#C5F54A", // primary brand
  lime500: "#A8DB2E",
  lime600: "#8BC11F",

  // Neutrals — dark
  black: "#000000",
  ink900: "#0A0A0B", // app bg (dark)
  ink850: "#101114",
  ink800: "#141416", // sidebar (dark)
  ink750: "#17181B", // card surface (dark)
  ink700: "#1E1F23",
  ink600: "#26272B", // border (dark)
  ink500: "#3A3B40",
  ink400: "#5B5C63",
  ink300: "#7A7B82",
  ink200: "#A1A1A8", // secondary text (dark)
  ink100: "#D4D4D8",

  // Neutrals — light
  white: "#FFFFFF",
  gray50: "#F8F9FB",
  gray100: "#F1F2F4", // app bg (light)
  gray200: "#E4E5E8", // sidebar / border (light)
  gray300: "#D1D2D6",
  gray400: "#9A9BA1",
  gray500: "#5B5C63", // secondary text (light)
  gray700: "#2A2B30",
  gray900: "#0F1115", // primary text (light)

  // Semantic
  red500: "#EF4444",
  red600: "#DC2626",
  green500: "#22C55E",
  amber500: "#F59E0B",
  blue500: "#3B82F6",

  // Tag accents (used on the colored pills above each card)
  tagPurple: "#A855F7",
  tagBlue: "#3B82F6",
  tagMagenta: "#EC4899",
  tagRed: "#EF4444",
  tagGreen: "#C5F54A",
};

const fonts = {
  montserrat: `"Montserrat", 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`,
  mono: `'JetBrains Mono', 'SF Mono', Menlo, Consolas, monospace`,
};

const fontSizes = {
  xs: "0.75rem", // 12 — meta, tag labels
  sm: "0.875rem", // 14 — body small, card description
  base: "1rem", // 16 — body
  md: "1.0625rem", // 17 — card title
  lg: "1.25rem", // 20
  xl: "1.5rem", // 24 — "Welcome Back!"
  "2xl": "1.875rem", // 30 — page title "Greenwave Website"
  "3xl": "2.25rem", // 36
};

const fontWeights = {
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

const lineHeights = {
  tight: 1.2,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.65,
};

const spacing = {
  0: "0",
  1: "0.25rem", // 4
  2: "0.5rem", // 8
  3: "0.75rem", // 12
  4: "1rem", // 16
  5: "1.25rem", // 20
  6: "1.5rem", // 24
  8: "2rem", // 32
  10: "2.5rem", // 40
  12: "3rem", // 48
  16: "4rem", // 64
};

const radii = {
  none: "0",
  sm: "6px",
  md: "8px", // inputs, small buttons
  lg: "12px", // cards, large buttons
  xl: "16px", // outer columns
  "2xl": "20px",
  pill: "999px",
  full: "50%",
};

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

const zIndices = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  overlay: 900,
  modal: 1000,
  toast: 1100,
  tooltip: 1200,
};

const transitions = {
  fast: "120ms ease",
  base: "180ms ease",
  slow: "280ms ease",
  spring: "320ms cubic-bezier(0.34, 1.56, 0.64, 1)",
};

const shared = {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  spacing,
  radii,
  breakpoints,
  zIndices,
  transitions,
  // Tag colors are the same in both themes
  tags: {
    purple: palette.tagPurple,
    blue: palette.tagBlue,
    magenta: palette.tagMagenta,
    red: palette.tagRed,
    green: palette.tagGreen,
  },
};

export const darkTheme = {
  ...shared,
  name: "dark",
  colors: {
    // Surfaces
    bg: palette.ink900, // page background
    sidebar: palette.ink800, // left rail
    surface: palette.ink750, // cards, columns, inputs
    surfaceAlt: palette.ink700, // hover / nested surface
    surfaceMuted: palette.ink850, // very subtle wells

    // Text
    textPrimary: palette.white,
    textSecondary: palette.ink200,
    textMuted: palette.ink400,
    textInverse: palette.gray900,

    // Borders & dividers
    border: palette.ink600,
    borderStrong: palette.ink500,
    divider: palette.ink700,

    // Brand
    primary: palette.lime400,
    primaryHover: palette.lime300,
    primaryActive: palette.lime500,
    primaryMuted: "rgba(197, 245, 74, 0.12)",
    onPrimary: palette.gray900, // text on the lime button

    // Semantic
    success: palette.green500,
    danger: palette.red500,
    warning: palette.amber500,
    info: palette.blue500,

    // Inputs
    inputBg: palette.ink750,
    inputBorder: palette.ink600,
    inputBorderFocus: palette.lime400,
    inputPlaceholder: palette.ink400,

    // Misc
    badgeBg: palette.red500,
    badgeText: palette.white,
    overlay: "rgba(0, 0, 0, 0.6)",
    avatarRing: palette.ink800,
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.4)",
    md: "0 4px 12px rgba(0, 0, 0, 0.45)",
    lg: "0 12px 32px rgba(0, 0, 0, 0.55)",
    focus: "0 0 0 3px rgba(197, 245, 74, 0.35)",
  },
};

export const lightTheme = {
  ...shared,
  name: "light",
  colors: {
    // Surfaces
    bg: palette.gray100,
    sidebar: palette.gray200,
    surface: palette.white,
    surfaceAlt: palette.gray50,
    surfaceMuted: palette.gray100,

    // Text
    textPrimary: palette.gray900,
    textSecondary: palette.gray500,
    textMuted: palette.gray400,
    textInverse: palette.white,

    // Borders & dividers
    border: palette.gray200,
    borderStrong: palette.gray300,
    divider: palette.gray200,

    // Brand
    primary: palette.lime400,
    primaryHover: palette.lime500,
    primaryActive: palette.lime600,
    primaryMuted: "rgba(197, 245, 74, 0.18)",
    onPrimary: palette.gray900,

    // Semantic
    success: palette.green500,
    danger: palette.red500,
    warning: palette.amber500,
    info: palette.blue500,

    // Inputs
    inputBg: palette.white,
    inputBorder: palette.gray200,
    inputBorderFocus: palette.lime500,
    inputPlaceholder: palette.gray400,

    // Misc
    badgeBg: palette.red500,
    badgeText: palette.white,
    overlay: "rgba(15, 17, 21, 0.45)",
    avatarRing: palette.white,
  },
  shadows: {
    none: "none",
    sm: "0 1px 2px rgba(15, 17, 21, 0.06)",
    md: "0 4px 12px rgba(15, 17, 21, 0.08)",
    lg: "0 12px 32px rgba(15, 17, 21, 0.12)",
    focus: "0 0 0 3px rgba(197, 245, 74, 0.45)",
  },
};

export const themes = { light: lightTheme, dark: darkTheme };
export const getTheme = (mode = "dark") => themes[mode] ?? darkTheme;

// Media query helper — use as: ${({ theme }) => theme.media.md} { ... }
const buildMedia = (bps) =>
  Object.fromEntries(
    Object.entries(bps).map(([k, v]) => [k, `@media (min-width: ${v})`]),
  );

darkTheme.media = buildMedia(breakpoints);
lightTheme.media = buildMedia(breakpoints);

export default darkTheme;
