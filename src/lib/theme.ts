
export const PALETTE = {
  black: "#000000",
  white: "#ffffff",
  darkPurple: "#060010",
  lightGray: "#f0f0f0",
  shadow: "rgba(0,0,0,0.12)",
  // Add other shared palette colors here if needed for JS-driven styles
};

export const LIGHT_THEME = {
  nav: {
    base: PALETTE.black,
    pill: PALETTE.white,
    hoverText: PALETTE.white,
    pillText: PALETTE.black,
  },
  // Add other theme-specific colors here
};

export const DARK_THEME = {
  nav: {
    base: PALETTE.white,
    pill: PALETTE.black,
    hoverText: PALETTE.black,
    pillText: PALETTE.white,
  },
};

export const NAV_DEFAULTS = {
  baseColor: PALETTE.white,
  pillColor: PALETTE.darkPurple,
  hoveredPillTextColor: PALETTE.darkPurple,
  mobileMenuBg: PALETTE.lightGray,
  shadow: PALETTE.shadow,
};

// Currently active theme
export const COLORS = LIGHT_THEME;
