import { makeStyles } from '@material-ui/core/styles';
import LogoVertical from '../assets/LogoVertical'
import Socials from '../assets/Socials'
import Link from 'next/link'


const useStyles = makeStyles(theme => ({
  footer: {
    backgroundPosition: 'center',
    backgroundColor: theme.colors.whisp,
    padding: '60px 20px',
    '& p': {
      color: theme.colors.abyss,
    }
  },
  centeredWrapper: {
    width: '100%',
    textAlign: 'center',
  },
  socialsWrapper: {
    marginTop: '10px',
    marginBottom: '15px'
  },
  copyRightText: {
    color: theme.colors.meta,
    textAlign: 'center',
    margin: '0 auto'
  },
  contact: {
    borderTop: `solid 1px ${theme.colors.line}`,
    maxWidth: '572px',
    margin: '0 auto',
    paddingTop: '32px', 
  },
  link: {
    color: theme.colors.white,
    marginBottom: '12px',
    display: 'inline-block'
  },
  logoWrapper: {
    marginBottom: '30px'
  },
  list: {
    margin: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '320px',
    margin: '0 auto',
  },
  listItem: {
    listStyle: 'none',
    padding: '6px 0',
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'text',
  },
  a: {
    fontFamily: theme.fontFamily.serif
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className="section-wrapper">
        <div className={classes.centeredWrapper}>
          <div className={classes.logoWrapper}>
            <LogoVertical />
          </div>
          <div className={classes.contact}>
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
          <p className={classes.copyRightText}>
            &copy; {new Date().getFullYear()} Joshua Worley. All Rights Reserved.
          </p>
          
        </div>
      </div>
    </div>
  )
};

export default Footer;


