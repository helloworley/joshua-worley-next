import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Socials from '../Socials'
import navSocials from '../../navSocials';

const socialItems = navSocials;


const useStyles = makeStyles(theme => ({
  navigation: {
    padding: '12px 40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    height: '80px',
    position: 'fixed',
    backgroundColor: theme.colors.abyss,
    top: '0',
    zIndex: '1000',
  },
  list: {
    margin: 0,
    display: 'flex',
    alignItems: 'center'
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
    margin: '0 30px 0 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '240px',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '50px',
  },
  logoText: {
    lineHeight: '54px',
    margin: '0 0 0 8px',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: theme.colors.whisp
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: theme.colors.whisp,
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: '600',
    fontSize: '12px'
  },
  navRight: {
    display: 'flex',
  },
  socialsWrapper: {
    display: 'flex',
    alignItems: 'center'
  }
}));


const NavDesktop = props => {
  const classes = useStyles();
  return (
    <div className={classes.navigation} id="navigation">
      
      <Link href="/">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src="/ikigai-light.svg" />
          <h1 className={classes.logoText}> Joshua Worley</h1>
        </div>
      </Link>

      <div className={classes.navRight}>
        <ul className={classes.list}>
          {props.navItems.map(menuItem => (
            <li key={menuItem.name} className={classes.listItem}>
              {
                menuItem.link.substring(0, 2) == '//' ?
                <Link href={menuItem.link}>
                  <a className={classes.a} target="_blank">
                    {menuItem.name}
                  </a>
                </Link>
                :
                <Link href={menuItem.link}>
                  <a className={classes.a}>
                    {menuItem.name}
                  </a>
                </Link>
              }
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





export default NavDesktop;