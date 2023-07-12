import styles from '@/styles/components.module.scss'
import Grid from '@mui/material/Grid';
import FastMotionLayout from '../components/fastMotionLayout';

const Contact = () => {
  return (
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
  );
};

export default Contact;