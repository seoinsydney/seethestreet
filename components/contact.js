import styles from '@/styles/components.module.scss'
import { Grid, Box } from '@mui/material';
import InputBox from '../components/inputBox';
import PrimaryButton from '../components/primaryButton';
import ReadMore from '../components/readMore';
import SocialMediaIcons from '../components/socialMediaIcons';

const Contact = () => {
  return (
    <div className={styles.backgroundGrey}>
        <Grid 
        container 
        className={styles.contact} 
        justifyContent="center"
        alignItems="center"
        >
          <Grid item xs={12} md={7} lg={7}>
            <h2>contact</h2>
            <Box>
              <InputBox label="Name" placeHolder="your full name.."/>
              <InputBox label="Email" placeHolder="your email.."/>
              <PrimaryButton text="send" />
            </Box>
          </Grid>
          <Grid item container xs={12} md={5} lg={5} >
            <SocialMediaIcons />
            <ReadMore text="My Street Photography Manual" link="/myStreetManual" />
            <ReadMore text="Street photography laws" link="/streetLaws" />
          </Grid>
        </Grid>
    </div>
  );
};

export default Contact;