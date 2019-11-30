import Link from 'next/link';
import { Text } from 'rebass';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  navigation: {
    padding: '32px',
  },
  list: {
    margin: 0,
    padding: '40px 0 0',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text'
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
  },
  a: {
    listStyle: 'none',
    padding: '6px 0',
    color: '#333',
    '&:hover': {
      color: 'pink',
    }
  }
}));


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
        name: 'UI',
      },
      {
        link: '/portfolio/photography',
        name: 'Photography',
      },
      {
        link: '/Video',
        name: 'video',
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

const getSingleMenuItem = menuItem => {
  const classes = useStyles();
  return (
    <Link href={menuItem.link}>
      <a className={classes.a}>
        {menuItem.name}
      </a>
    </Link>
  )
}

const getMenuChildren = (name, menuChildren) => {
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
              <a className={classes.a}>
                {childItem.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </span>
  )
}


const Navigation = props => {
  const classes = useStyles();
  return (
    <div className={classes.navigation}>
      <Link href="/">
        <Typography className={classes.logo}> Joshua Worley</Typography>
      </Link>
      <ul className={classes.list}>
        {menuItems.map(menuItem => (
          <li key={menuItem.name} className={classes.listItem}>
            {menuItem.children ? getMenuChildren(menuItem.name, menuItem.children) : getSingleMenuItem(menuItem)}
          </li>
        ))}
      </ul>
    </div>

  )
};





export default Navigation;