import { extendTheme } from '@chakra-ui/react'

// * Include custom option in here, like colors, fonts...
const theme = extendTheme({
  colors: {
    white: "#fff",
    orange: "#F37A02",
    magenta: "#EB4561",
    yellow: {
      50: "#FFEB40",
      500: "#FFB504"
    },
    blue: {
      50: "#56C2BD",
      100: "#03AAE1",
      900: "#001F55"
    },
    green: {
      50: "#38DF58",
      500: "#FFB504"
    }
  },
  fonts: {
    body: "Radio Canada, sans-serif",
    heading: "Roboto, sans-serif"
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },
  radii: {
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
  },
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
  },
  h1: {
    fontSizes: '64px',
    colors: '900.blue'
  }
});

export default theme
