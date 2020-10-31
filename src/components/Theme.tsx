import { createBox, createText } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "rgba(250, 170, 78, 0.911)",
    text: "rgba(12, 13, 52, 0.7)",
    button: "#0C0D34",
    white: "white",
    grey: "rgba(250, 170, 78, 0.911)",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },

  textVariants: {
    hero: {
      fontSize: 70,
      lineHeight: 80,
      fontFamily: "SFProText-Bold",

      color: "white",
      textAlign: "center",
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
      textAlign: "center",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
      textAlign: "center",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "text",
    },
    button: {
      fontSize: 16,
      fontFamily: "SFProText-Medium",
      color: "text",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
