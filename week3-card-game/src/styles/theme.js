const windowSize = {
  small: 'screen and (max-width: "600px")',
  base: 'screen and (max-width: "768px")',
  large: 'screen and (max-width: "1024px")',
};

const fontSize = {
  xs: "0.5rem",
  sm: "0.75rem",
  base: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "1.75rem",
  "2xl": "2rem",
  "3xl": "2.5rem",
  "4xl": "3rem",
  "5xl": "3.5rem",
};

const colors = {
  background: "#fff",
  fontPrimary: "black",
  fontSecondary: "gray",
  primary: "#FF9E16",
  secondary: "#BA2623",
  hover: "#00a0ff50",
};

const repo = {
  open: "red",
  close: "blue",
};

const theme = {
  windowSize,
  repo,
  fontSize,
  colors,
};

export default theme;
