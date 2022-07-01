import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";

import NextNProgress from "nextjs-progressbar";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <NextNProgress />
      <AnimatePresence exitBeforeEnter>
        <Component key={router.asPath} {...pageProps} />
        {/* <Cursor /> */}
      </AnimatePresence>
    </>
  );
}

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 bg-black rounded-full"
      variants={variants}
      animate="default"
    />
  );
};

export default MyApp;
