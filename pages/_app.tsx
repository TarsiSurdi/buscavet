import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";

import nextUITheme from "../styles/nextUITheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={nextUITheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
