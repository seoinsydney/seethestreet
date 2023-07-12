import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.paintBg}></div>
      <FastMotionLayout delaySpeed={0.5}>
        <Grid container 
          justifyContent={'space-evenly'}
         >
          <Grid item xs={12} sm={12} md={12} lg={12} className={styles.projects__title}>
              <h2>PROJECTS</h2>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} className={styles.projects__img1}>
            <img src="./pexels-photo-2090484.jpeg" alt="image" />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={3} className={styles.projects__img2}>
              <img src="./pexels-photo-3778550.webp" alt="image" />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} className={styles.projects__img3}>
              <img src="./pexels-photo-1727658.webp" alt="image" />
          </Grid>
        </Grid>
      </FastMotionLayout>
    </div>
  );
};

export default Projects;