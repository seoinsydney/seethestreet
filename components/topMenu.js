import useState from 'react';
import styles from '@/styles/components.module.scss'
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';

const TopMenu = () => {

  const navBar = [
    {
      name: 'home',
      link: '/',
    },
    {
      name: 'about me',
      link: '/about',
    },
    {
      name: 'my street photography manual',
      link: '/stManual',
    },
    {
      name: 'street photography Laws',
      link: '/stLaws',
    },
  ]

  return (
    <div className={styles.topMenu}>
      <Grid container justifyContent={'space-between'}>
        <Grid item xs={2} md={2} lg={2}>
          <p>see the street</p>
        </Grid>
        <Grid item xs={1} md={1} lg={1}>
          <MenuIcon />
        </Grid>
      </Grid>

      {/* <ul>
        {
          navBar.map(menu => 
            <li key={menu.name}><a href={menu.link}>{menu.name}</a></li>
            )
        }
      </ul> */}
    </div>
  );
};

export default TopMenu;