import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: '190px',
  },
  logo: {
    color: 'text',
    cursor: 'pointer',
    maxWidth: '160px',
  },
  logoText: {
    margin: '0 0 0 8px',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: theme.colors.gray600,
    display: 'inline-table',
    fontFamily: 'Lato, Helvetica, Arial, sans-serif'
  },
  [theme.breakpoints.up('md')]: {
    logo: {
      maxWidth: '240px',
    },
  }
}));


const LogoHorizontal = props => {
  const classes = useStyles();
  return (
    <Link href="/">
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="/joshworley-logo.svg" />
      </div>
    </Link>
  )
};

export default LogoHorizontal;