import { motion, AnimatePresence, useInView } from "framer-motion"
import { useRef, useEffect} from 'react';


const MotionLayout = ({children}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });
    useEffect (()=> {
        console.log(isInView);
    },[isInView])

    return (
        <AnimatePresence>
            <motion.div
            ref={ref}
                initial={{ opacity: 0, y: 15}}
                animate={{ opacity: 1, y: 0}}
                exit={{ opacity: 0, y: 15}}
                transition={{ delay: 0.8, duration: 0.3 }}
                >
                {children}
            </motion.div>
        </AnimatePresence>
    );
  };
  
  export default MotionLayout;