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
    maxWidth: '50px',
  },
  logoText: {
    lineHeight: '54px',
    margin: '0 0 0 8px',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: theme.colors.whisp,
    display: 'inline-table',
    fontFamily: 'Lato, Helvetica, Arial, sans-serif'
  },
  [theme.breakpoints.down('xs')]: {
    logo: {
      maxWidth: '40px',
    },
  }
}));


const LogoHorizontal = props => {
  const classes = useStyles();
  return (
    <Link href="/">
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="/ikigai-light.svg" />
        <h1 className={classes.logoText}> Joshua Worley</h1>
      </div>
    </Link>
  )
};

export default LogoHorizontal;