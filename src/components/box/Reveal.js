import React from "react";
import { motion, useInView, useAnimation } from 'framer-motion'

export default function({ children, width="100%", delay = 0.3 }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    React.useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);

    return (
        <div  ref={ref} style={{ width, height: '100%' }}>
            <motion.div
                style={{ width: '100%', height: '100%' }}
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={ mainControls }
                transition={{ duration: 0.4, delay }}
            >
                { children }
            </motion.div>
        </div>
        
    )
}