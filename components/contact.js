import styles from '@/styles/components.module.scss'
import { Grid, Box } from '@mui/material';
import FastMotionLayout from '../components/fastMotionLayout';
import InputBox from '../components/inputBox';
import PrimaryButton from '../components/primaryButton';
import ReadMore from '../components/readMore';
import SocialMediaIcons from '../components/socialMediaIcons';

const Contact = () => {
  return (
    <div className={styles.backgroundGrey}>
      <FastMotionLayout delaySpeed={0.4}>
        <Grid 
        container 
        className={styles.contact} 
        // direction="row"
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={12} md={7} lg={7}>
            
            <h2>CONTACT</h2>
            <Box>
              <InputBox label="Name" placeHolder="your full name.."/>
              <InputBox label="Email" placeHolder="your email.."/>
              <PrimaryButton text="send" />
            </Box>
         
          </Grid>
          <Grid item container xs={12} md={5} lg={5} >
       
            <SocialMediaIcons />
            <ReadMore text="My Street Photography Manual" link="" />
            <ReadMore text="Street photography laws" link="" />
         
          </Grid>
        </Grid>
        </FastMotionLayout>
    </div>
  );
};

export default Contact;