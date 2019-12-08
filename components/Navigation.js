import Link from 'next/link';
import { Text } from 'rebass';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  navigation: {
    padding: '32px',
  },
  list: {
    margin: 0,
    padding: '64px 0 0',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
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


const menuItems = [
  {
    link: '/resume',
    name: 'Resume',
  },
  {
    link: '#',
    name: 'Portfolio',
    children: [
      {
        link: '/portfolio/websites',
        name: 'Websites',
      },
      {
        link: '/portfolio/ui',
        name: 'UI Design',
      },
      {
        link: '/portfolio/print',
        name: 'Print Design',
      },
      {
        link: '/portfolio/photography',
        name: 'Photography',
      },
      {
        link: '/Video',
        name: 'Video',
      },
    ]
  },
  {
    link: '/blog',
    name: 'Blog',
  },
  {
    link: '/contact',
    name: 'Contact',
  },
]

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
      <Text
        sx={{
          color: '#bababa'
        }}
      >
        {name}
      </Text>
      <ul>
        {menuChildren.map(childItem => (
          <li key={childItem.name} className={classes.listItem}>
            <Link
              href={childItem.link}
            >
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
          <Typography style={{color: props.menuColor}}> Joshua Worley</Typography>
        </div>
      </Link>
      <ul className={classes.list}>
        {menuItems.map(menuItem => (
          <li key={menuItem.name} className={classes.listItem}>
            {menuItem.children ? getMenuChildren(menuItem.name, menuItem.children, props.menuColor) : getSingleMenuItem(menuItem, props.menuColor)}
          </li>
        ))}
      </ul>
    </div>

  )
};





export default Navigation;