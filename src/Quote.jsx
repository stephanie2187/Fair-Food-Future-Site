import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Quote = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    }
  }, [controls, inView]);

  return (
    <motion.h2
      id="quote"
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      One in 8 households (12.8 percent) experienced food insecurity, or lack
      of access to an affordable, nutritious diet. An estimated 44.2 million
      Americans lived in these households.
    </motion.h2>
  );
};

export default Quote;
