import localFont from "next/font/local";

const integralCF = localFont({
  src: [
    {
      path: "./integralcf-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-integralCF",
});

const satoshi = localFont({
  src: [
    {
      path: "./Satoshi-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Satoshi-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Satoshi-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-satoshi",
});
const josefinsans = localFont({
  src: [
    { path: "./JosefinSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./JosefinSans-ThinItalic.ttf", weight: "100", style: "italic" },

    { path: "./JosefinSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./JosefinSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },

    { path: "./JosefinSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./JosefinSans-LightItalic.ttf", weight: "300", style: "italic" },

    { path: "./JosefinSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./JosefinSans-Italic.ttf", weight: "400", style: "italic" },

    { path: "./JosefinSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./JosefinSans-MediumItalic.ttf", weight: "500", style: "italic" },

    { path: "./JosefinSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./JosefinSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },

    { path: "./JosefinSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./JosefinSans-BoldItalic.ttf", weight: "700", style: "italic" },

    // Nếu có variable font, có thể thêm:
    { path: "./JosefinSans-VariableFont_wght.ttf", style: "normal" },
    { path: "./JosefinSans-Italic-VariableFont_wght.ttf", style: "italic" },
  ],
  fallback: ["sans-serif"],
  variable: "--font-josefin",
});

export { integralCF, satoshi,josefinsans };
