import { motion, AnimatePresence, useInView, useAnimation } from "framer-motion"
import { useRef, useEffect} from 'react';
import styles from '@/styles/components.module.scss'

const FastMotionLayout = ({children, delaySpeed}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    useEffect (()=> {
        if (isInView) {
            mainControls.start("visible");
        }
    },[isInView])

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                exit={{ opacity: 0, y: 15}}
                transition={{ delay: delaySpeed, duration: 0.5 }}
                >
                {children}
            </motion.div>
        </AnimatePresence>
    );
  };
  
  export default FastMotionLayout;