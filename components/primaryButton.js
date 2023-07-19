import { motion } from 'framer-motion';
import { Button } from '@mui/material';
import styles from '@/styles/components.module.scss'

const PrimaryButton = ({text}) => {
  return (
    // <motion.div
    //   whileHover={{
    //     scale: 1.3,
    //     transition: { duration: .3 },
    //   }}
    //   whileTap={{ scale: 0.8 }}
    //   
    // >
    <div className={styles.primaryButton}>
      <Button 
      variant="send"
      size="large"
      onClick={() => {
        alert('button');
      }}
      >{text}</Button>
    </div>
    // </motion.div>
  );
};

export default PrimaryButton;