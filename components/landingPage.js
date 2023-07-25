import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const LandingScreen = () => {
  return (
    <Grid container className={styles.landingPage}>
        <Grid item xs={12} md={6} lg={6} className={styles.makeCenter}>
            <FastMotionLayout delaySpeed={0.5}>
                <section>
                <h1>see the street</h1>
                <p>Street photography project by 
                    <b>Boris Pocatko</b> <br />
                    based in Sydney</p>
                    
                </section>
            </FastMotionLayout>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={styles.makeCenter}>
            <FastMotionLayout delaySpeed={0.7}>
                <div className={styles.redBox}>
                    <img src="./pexels-photo-2031774.jpeg" alt="image" />
                </div>
            </FastMotionLayout>
        </Grid>
    </Grid>
  );
};

export default LandingScreen;