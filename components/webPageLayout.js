import styles from '@/styles/components.module.scss'
import SEOHead from './head';
import TopMenu from './topMenu';
import Contact from '../components/contact';
import Footer from './footer';

const WebPageLayout = ({children}) => {
  return (
    <>
        <SEOHead />
        <TopMenu />
        {children}
        <Contact />
        <Footer />
    </>
  );
};

export default WebPageLayout;