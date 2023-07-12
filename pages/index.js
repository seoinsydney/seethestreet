
import { useRef } from 'react';
import styles from '@/styles/Home.module.scss'
import PrimaryButton from '../components/primaryButton';
import ReadMore from '../components/readMore';
import FastMotionLayout from '../components/fastMotionLayout';
import SlowMotionLayout from '../components/slowMotionLayout';
import SEOHead from '../components/head';
import LandingPage from '../components/landingScreen';
import AboutMe from '../components/about';
import Grid from '@mui/material/Grid';
import { motion, useScroll, useTransform } from "framer-motion"

export default function Home() {

  const targetRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.2, 0]);

  return (
    <>
      <SEOHead />

      <main className={styles.container}>

        <FastMotionLayout>
          {/* <motion.div style={{opacity}} ref={targetRef}> */}
            <LandingPage />
          {/* </motion.div> */}
        </FastMotionLayout>

        <FastMotionLayout>
            <AboutMe />
        </FastMotionLayout>

        <FastMotionLayout>
          <Grid container spacing={1} className={styles.stories}>
            <div className={styles.paintBg}></div>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <h2>STORIES BEHIND IMAGES</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <p>Designer</p>
              <img src="./pexels-photo-6274712.webp" alt="image" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3}>
              <p>Developer</p>
              <img src="./pexels-photo-1499327.jpeg" alt="image" />
            </Grid>
          </Grid>
          </FastMotionLayout>

          <FastMotionLayout>
          <Grid container className={styles.myStreet}>
            <Grid item xs={12} md={4} lg={4}>
              <div className={styles.blackBox}></div>
            </Grid>
            <Grid item xs={12} md={6} lg={6} className={styles.myStreet__flex}>
              <h2>MY STREET PHOTOGRAPHY MANUAL</h2>
              <h3>Am I worthy to create art?</h3>
              <p>Before I started street photography I had this crazy idea in my head that I am not creative or worthy enough to create art. Not sure if I am now but I don’t care. I take pictures which someone may describe as art, someone else as snapshots. It’s about what makes you happy.</p>
              <img src="./pexels-photo-1674049.webp" alt="image" width="200" height="100" />
              <img src="./pexels-photo-297494.webp" alt="image" width="100" height="100" />
              <img src="./pexels-photo-1568607.jpeg" alt="image" width="100" height="100" />
              <ReadMore link="" />
            </Grid>
          </Grid>
          </FastMotionLayout>

          <FastMotionLayout>
          <Grid container 
          justifyContent={'space-evenly'}
          className={styles.projects}
          >
            <div className={styles.paintBg}></div>
            <Grid item xs={12} sm={12} md={12} lg={12} className={styles.projects__title}>
              <h2>PROJECTS</h2>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={styles.projects__img1}>
              <motion.div className={styles.projects__layer}>
                <img src="./pexels-photo-2090484.jpeg" alt="image" />
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={3} className={styles.projects__img2}>
              <img src="./pexels-photo-3778550.webp" alt="image" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} className={styles.projects__img3}>
              <img src="./pexels-photo-1727658.webp" alt="image" />
            </Grid>
          </Grid>
          </FastMotionLayout>

          <FastMotionLayout>
          <Grid container className={styles.contact}>
            <Grid item xs={12} md={7} lg={7}>
              <h2>CONTACT</h2>
            </Grid>
            <Grid item xs={12} md={5} lg={5}>
              <h2>CONTACT</h2>
            </Grid>
          </Grid>
          </FastMotionLayout>

      </main>
    </>
  )
}
