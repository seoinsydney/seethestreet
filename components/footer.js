import styles from '@/styles/components.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footerBottom}>      
      <p>Copyright © Boris Pocatko. {currentYear}  All rights reserved.</p>
    </footer>
  );
};

export default Footer;