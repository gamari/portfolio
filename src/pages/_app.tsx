import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextNProgress />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.asPath} {...pageProps} />
      </AnimatePresence>
    </>
  );
}

export default MyApp;
