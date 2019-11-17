import Link from 'next/link';
import { ThemeProvider } from 'theme-ui'
import theme from '../theme'
// import menuItems from '../data/menuItems'

const linkStyle = {
  marginRight: 15
};

const menuItems = [
  {
    name: 'Home',
    link: '/',
  },
  {
    link: '/about',
    name: 'About',
  },
]


const Header = props => (
  <ThemeProvider theme={theme}>
    <ul
      sx={{
        listStyle: 'none'
      }}
    >
      {menuItems.map(menuItem => (
        <li
          key={menuItem.name}
          sx={{
            textDecoration: 'none'
          }}
        >
          <Link href={menuItem.link}>
            <a
              sx={{
                textDecoration: 'none',
              }}
            >{menuItem.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </ThemeProvider>
);





export default Header;