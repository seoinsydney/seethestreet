import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const StoriesBehind = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.paintBg}></div>
        <Grid container mt={12}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h2>stories behind images</h2>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <FastMotionLayout delaySpeed={0.5}>
            <img src="./pexels-photo-6274712.webp" alt="image" />
            </FastMotionLayout>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
          <FastMotionLayout delaySpeed={0.6}>
            <img src="./pexels-photo-1499327.jpeg" alt="image" />
            </FastMotionLayout>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            <FastMotionLayout delaySpeed={0.7}>
              <img src="./pexels-photo-1499327.jpeg" alt="image" />
            </FastMotionLayout>
          </Grid>
        </Grid>
    </div>
  );
};

export default StoriesBehind;