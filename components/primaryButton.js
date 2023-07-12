import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import styles from '@/styles/components.module.scss'

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1.5, duration: 1.5 }}
      className={styles.primaryButton}
    >
        <motion.Button variant="outlined"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        
        >
            Contact
        </motion.Button>
    </motion.div>
  );
};

export default MyComponent;