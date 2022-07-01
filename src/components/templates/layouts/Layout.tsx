import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import Header from "../../organisms/Header";

type Props = {
  children: ReactNode;
  isTop?: boolean;
};

const Layout: React.FC<Props> = ({ children, isTop = false }) => {
  return (
    <motion.div
      className="relative w-full min-h-screen bg-zinc-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      {!isTop && <Header />}
      {children}
    </motion.div>
  );
};

export default Layout;
