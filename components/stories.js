import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const StoriesBehind = () => {
  return (
    <div className={styles.stories}>
      <div className={styles.paintBg}></div>
      <FastMotionLayout delaySpeed={0.5}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <h2>STORIES BEHIND IMAGES</h2>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <div><img src="./pexels-photo-6274712.webp" alt="image" /></div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <img src="./pexels-photo-1499327.jpeg" alt="image" />
          </Grid>
        </Grid>
      </FastMotionLayout>
    </div>
  );
};

export default StoriesBehind;