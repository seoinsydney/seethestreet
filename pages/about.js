import styles from '@/styles/page.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';
import WebPageLayout from '../components/webPageLayout';

export default function About() {
  return (
    <WebPageLayout>
    <div className={styles.article}>
        <FastMotionLayout delaySpeed={0.5}>
        <h1>Boris pocatko</h1>
        <Grid container>
            <Grid item xs={12} md={6} lg={6}>
                <img src="./me - small.png" alt="Boris pocatko" />
            </Grid>
            <Grid container xs={12} md={6} lg={6} className={styles.article__layout}>
                <Grid item xs={12} md={6} lg={6}>
                    <h2>see the</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src="./pexels-photo-1568607.jpeg" alt="Boris pocatko" />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src="./pexels-photo-1568607.jpeg" alt="Boris pocatko" />
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <h2>street</h2>
                </Grid>
            </Grid> 
        </Grid>
        <hr />
        <section>
            <p>My name is Boris, was born in Slovakia and studied in the Czech republic. A street photographer based in Sydney. Working on my vision. Open to collaboration, email me if interested.</p>
            <h6>For a quick overview of street photography related laws, check this: <a href="http://bit.ly/photolaws">Street Photography Laws</a></h6>
        </section>
        </FastMotionLayout>
    </div>
    </WebPageLayout>
  )
}