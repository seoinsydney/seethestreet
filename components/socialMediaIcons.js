import styles from '@/styles/components.module.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid } from '@mui/material';

const SocialMediaIcons = () => {
  const socialMedias = [
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
    {
      name: 'instagram',
      link: '',
      img: './circum_instagram.png',
      alt: 'instagram icon',
    },
  ]
  return (
    <Grid 
      container 
      className={styles.iconContainer} 
      justifyContent="flex-start"
      justify="center"
      >
      {
        socialMedias.map((icon) =>
          <Grid item xs={4} md={3} lg={3} key={icon.name}>
            <a href={icon.link}>
              <img src={icon.img} alt={icon.alt} />
            </a>
          </Grid>
          )
      }
    </Grid>
  );
};

export default SocialMediaIcons;