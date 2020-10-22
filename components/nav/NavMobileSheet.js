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
    padding: '80px 20px',
    backgroundColor: theme.colors.abyss,
    width: '80vw',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '30px 0',
    padding: '0'
  },
  listItem: {
    listStyle: 'none',
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
    color: theme.colors.whisp,
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase'
  },
  linksWrapper: {
    borderTop: `solid 1px ${theme.colors.whisp}`
  },
  socialsWrapper: {
    display: 'flex',
    justifyContent: 'center'
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
      <LogoVertical />
      <div className={classes.linksWrapper}>
        <ul className={classes.list}>
          {props.navItems.map(menuItem => (
            <li key={menuItem.name} className={classes.listItem}>
              {getSingleMenuItem(menuItem, props.menuColor)}
            </li>
          ))}
        </ul>
        <div className={classes.socialsWrapper}>
          <Socials />
        </div>
      </div>
    </div>

  )
};

export default NavMobileSheet;