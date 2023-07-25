import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.paintBg}></div>
        <Grid container 
        mt={15}
        justifyContent={'space-evenly'}
         >
          <Grid item xs={12} sm={12} md={6} lg={3} className={styles.projects__img1}>
          <FastMotionLayout delaySpeed={0.3}>
            <h2>projects</h2>
            <img src="./pexels-photo-2090484.jpeg" alt="image" />
            </FastMotionLayout>
          </Grid>
          
          <Grid item xs={12} sm={12} md={6} lg={3} className={styles.projects__img2}>
          <FastMotionLayout delaySpeed={0.4}>
              <img src="./pexels-photo-3778550.webp" alt="image" />
              </FastMotionLayout>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} className={styles.projects__img3}>
          <FastMotionLayout delaySpeed={0.5}>
              <img src="./pexels-photo-1727658.webp" alt="image" />
              </FastMotionLayout>
          </Grid>
        </Grid>
    </div>
  );
};

export default Projects;