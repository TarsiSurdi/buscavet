import { createTheme } from "@nextui-org/react";

export default createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      danger100: "#FFE5D6",
      danger200: "#FFC4AE",
      danger300: "#FF9C85",
      danger400: "#FF7667",
      danger500: "#FF3835",
      danger600: "#DB2633",
      danger700: "#B71A33",
      danger800: "#931030",
      danger900: "#7A0A2F",
    },
  },
});
