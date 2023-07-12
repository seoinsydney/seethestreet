
import { useRef } from 'react';
import WebPageLayout from '../components/webPageLayout';
import LandingPage from '../components/landingPage';
import AboutMe from '../components/about';
import StoriesBehind from '../components/stories';
import MyStreetManual from '../components/myStreetManual';
import Projects from '../components/projects';
import styles from '@/styles/Home.module.scss'
import { useScroll, useTransform } from "framer-motion"

export default function Home() {

  const targetRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.2, 0]);

  return (
    <WebPageLayout>
      <main className={styles.mainContainer}>
        {/* <motion.div style={{opacity}} ref={targetRef}> */}
        {/* </motion.div> */}
        <LandingPage />
        <AboutMe />
        <StoriesBehind />
        <MyStreetManual />
        <Projects />
      </main>
    </WebPageLayout>
  )
}
