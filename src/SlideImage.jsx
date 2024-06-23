import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const SlidingImage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.img
      id="info"
      ref={ref}
      src="./Food Inequity.png"
      initial={{ x: "100%", opacity: 0 }}
      animate={controls}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: "easeInOut",
      }}
      alt="Food Inequity"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default SlidingImage;
