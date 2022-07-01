import { motion } from "framer-motion";
import React from "react";

const AnimationBall = () => {
  return (
    <motion.div
      className="absolute w-32 h-32 bg-white border-2 top-10 left-10"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default AnimationBall;
