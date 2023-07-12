import styles from '@/styles/Home.module.scss'
import Grid from '@mui/material/Grid';
import ReadMore from '../components/readMore';

const AboutMe = () => {
  return (
    <>
        <Grid container className={styles.about}>
            <Grid item xs={12} md={6} lg={6}>
                <div className={styles.blackBg}></div>
                <img src="./pexels-photo-134469.webp" alt="image" />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
                <section>
                <h2>ABOUT ME</h2>
                <p>My name is Boris, was born in Slovakia and studied in the Czech republic. A street photographer based in Sydney. Working on my vision. Open to collaboration, email me if interested.</p>
                <ReadMore link="" />
                </section>
            </Grid>
        </Grid>
    </>
  );
};

export default AboutMe;