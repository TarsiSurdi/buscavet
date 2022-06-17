import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import nextUITheme from "../styles/nextUITheme";
import "../styles/globals.css";
import FooterContextProvider from "../components/contexts/FooterContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={nextUITheme}>
      <FooterContextProvider>
        <Component {...pageProps} />
      </FooterContextProvider>
    </NextUIProvider>
  );
}

export default MyApp;
