import { motion } from 'framer-motion';
import styles from '@/styles/components.module.scss'

const ReadMore = ({link}) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.3,
        transition: { duration: .3 },
      }}
      whileTap={{ scale: 0.8 }}
      className={styles.readMore}
    >
      <a href={link}>
          READ MORE
      </a>
    </motion.div>
  );
};

export default ReadMore;