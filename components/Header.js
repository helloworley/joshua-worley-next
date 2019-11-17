import Link from 'next/link';
import { Heading } from 'rebass'
// import menuItems from '../data/menuItems'

const listStyle = {
  margin: '0',
  padding: '0',
}

const listItemStyle = {
  listStyle: 'none',
  padding: '6px 0',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'text'
};

const menuItems = [
  {
    link: '/',
    name: 'About',
  },
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
  return (
    <Link href={menuItem.link}>
      <a>
        {menuItem.name}
      </a>
    </Link>
  )
}

const getMenuChildren = menuChildren => {
  return (
    <ul>
      {menuChildren.map(childItem => (
        <li key={childItem.name} style={listItemStyle}>
          <Link
            href={childItem.link}
          >
            <a>
              {childItem.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const Header = () => (
  <>
    <Heading
      sx={{
        color: 'text'
      }}
    >
      Joshua Worley
    </Heading>
    <ul style={listStyle} className="menu-items">
      {menuItems.map(menuItem => (
        <li key={menuItem.name} style={listItemStyle}>
          {menuItem.children ? getMenuChildren(menuItem.children) : getSingleMenuItem(menuItem)}
        </li>
      ))}
    </ul>
  </>
);





export default Header;