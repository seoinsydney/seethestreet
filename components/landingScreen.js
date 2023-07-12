import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';

const LandingScreen = () => {
  return (
    <>
        <Grid container className={styles.landingPage}>
            <Grid item xs={12} md={6} lg={6}>
                <section>
                <h1>SEE THE STREET</h1>
                <p>Street photography project by <b>Boris Pocatko</b> <br />
                    based in Sydney</p>
                </section>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <div className={styles.redBox}>
                <img src="./pexels-photo-2031774.jpeg" alt="image" />
                </div>
            </Grid>
        </Grid>
    </>
  );
};

export default LandingScreen;