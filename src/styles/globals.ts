import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";

const theme = extendTheme({
  colors: {
    purple: {
      "500": "#15083E",
      "300": "#291C52",
      "100": "#8C72FF",
    },
    blue: {
      "50": "#6CD3FF",
    },
  },
  fonts: {
    heading: "Rubik, sans-serif",
    body: "Rubik, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "purple.500",
        color: "gray.50",
      },
    },
  },
});

export { theme };
