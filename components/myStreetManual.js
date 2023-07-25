import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import ReadMore from './readMore';
import FastMotionLayout from '../components/fastMotionLayout';

const MyStreetManual = () => {
  return (

    <Grid container className={styles.myStreet}>
        <Grid item xs={12} md={4} lg={4}>
            <div className={styles.blackBox}>
              <img src="./street manual.png" alt="image" />
            </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} className={styles.myStreet__flex}>
          <FastMotionLayout delaySpeed={0.5}>
            <h2>My Street Photography Manual</h2>
            <h3>Am I worthy to create art?</h3>
            <p>Before I started street photography I had this crazy idea in my head that I am not creative or worthy enough to create art. Not sure if I am now but I don’t care. I take pictures which someone may describe as art, someone else as snapshots. It’s about what makes you happy.</p>
            <ReadMore text="read more" link="/myStreetManual" />
          </FastMotionLayout>
        </Grid>
    </Grid>
    
  );
};

export default MyStreetManual;