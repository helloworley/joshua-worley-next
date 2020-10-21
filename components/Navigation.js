import Link from 'next/link';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import navItems from '../navItems';
import navSocials from '../navSocials';
import Socials from './Socials'

// const menuItems = navItems;
const socialItems = navSocials;


const useStyles = makeStyles({
  navigation: {
    padding: '32px',
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
});



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

const getMenuChildren = (name, menuChildren, menuColor) => {
  const classes = useStyles();
  return (
    <span>
      <Typography>{name}</Typography>
      <ul>
        {menuChildren.map(childItem => (
          <li key={childItem.name} className={classes.listItem}>
            <Link href={childItem.link}>
              <a className={classes.a} style={{color: menuColor}}>
                {childItem.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </span>
  )
}

function logo(color) {
  if (color == '#fff') {
    return "/ikigai-light.svg";
  }
  return "/ikigai-dark.svg";
}

const Navigation = props => {
  const classes = useStyles();
  return (
    <div className={classes.navigation} id="navigation">
      <Link href="/">
        <div className={classes.logoContainer}>
          <img className={classes.logo} src={logo(props.menuColor)} />
          <Link href="/">
            <Typography style={{color: props.menuColor}}> Joshua Worley</Typography>
          </Link>
        </div>
      </Link>
      <ul className={classes.list}>
        {/* {menuItems.map(menuItem => (
          <li key={menuItem.name} className={classes.listItem}>
            {menuItem.children ? getMenuChildren(menuItem.name, menuItem.children, props.menuColor) : getSingleMenuItem(menuItem, props.menuColor)}
          </li>
        ))} */}
      </ul>
      <Socials />
    </div>

  )
};





export default Navigation;