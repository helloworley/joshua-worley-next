import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import navItems from '../navItems';
import navSocials from '../../navSocials';
import Socials from '../Socials'
import LogoVertical from '../LogoVertical'

// const menuItems = navItems;
const socialItems = navSocials;


const useStyles = makeStyles( theme => ({
  navSheet: {
    padding: '32px',
    backgroundColor: theme.colors.abyss,
    width: '80vw',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text'
  },
  logoContainer: {
    textAlign: 'center',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '80px',
    margin: '0 0 4px',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
  }
}));



const getSingleMenuItem = (menuItem, menuColor) => {
  const classes = useStyles();
  return (
    <Link href={menuItem.link}>
      <a className={classes.a} style={{color: menuColor}}>
        {menuItem.name}
      </a>
    </Link>
  )
}

const NavMobileSheet = props => {
  const classes = useStyles();
  return (
    <div className={classes.navSheet} id="navigation">
      <Link href="/">
        <div className={classes.logoContainer}>
          <LogoVertical />
        </div>
      </Link>
      <ul className={classes.list}>
        {props.navItems.map(menuItem => (
          <li key={menuItem.name} className={classes.listItem}>
            {getSingleMenuItem(menuItem, props.menuColor)}
          </li>
        ))}
      </ul>
      <Socials />
    </div>

  )
};

export default NavMobileSheet;