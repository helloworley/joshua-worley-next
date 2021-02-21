import { makeStyles } from '@material-ui/core/styles';
import LogoHorizontal from '../assets/LogoHorizontal';

const useStyles = makeStyles(theme => ({
  footerOuter: {
    padding: '20px 40px'
  },
  footerFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  socialsWrapper: {
    marginTop: '10px',
    marginBottom: '15px'
  },
  copyRightText: {
    color: theme.colors.gray400,
    textAlign: 'right',
    fontFamily: theme.fontFamily.sansSerif,
    fontWeight: 600,
    fontSize: 12
  },
  link: {
    color: theme.colors.gray400,
    marginBottom: '12px',
    display: 'inline-block',
  },
  logoWrapper: {
    '& img': {
      maxWidth: 180
    }
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
    fontFamily: theme.fontFamily.sansSerif,
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  [theme.breakpoints.up('md')]: {
    footerOuter: {
      padding: '10px 40px'
    },
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.footerOuter}>
      <div className={classes.footerInner}>
        <div className={classes.footerFlex}>
          <div className={classes.logoWrapper}>
            <LogoHorizontal />
          </div>
          <p className={classes.copyRightText}>
            &copy; {new Date().getFullYear()} Josh Worley // All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
};

export default Footer;


