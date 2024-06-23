import React, { useRef } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export default function Bar({ leftContent, rightContent }) {
    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref, { triggerOnce: true, threshold: 0.1 });

    React.useEffect(() => {
        if (inView) {
            controls.start({ rotate: 360, opacity: 1, transition: { type: 'spring', stiffness: 50 } });
        }
    }, [controls, inView]);

    return (
        <div className="bar-class">
            <motion.div
                className="bar-left"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {leftContent}
            </motion.div>
            <motion.div
                ref={ref}
                className="bar-right"
                initial={{ rotate: 0, opacity: 0 }}
                animate={controls}
                style={{ display: 'inline-block' }} 
            >
                {rightContent}
            </motion.div>
        </div>
    );
}
