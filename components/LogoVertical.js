import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  logo: {
    height: '50px',
  },
  logoText: {
    lineHeight: '54px',
    margin: '0 auto',
    cursor: 'pointer',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    color: theme.colors.whisp,
    minWidth: 'initial',
  },
}));


const LogoVertical = props => {
  const classes = useStyles();
  return (
    <Link href="/">
      <>
        <img className={classes.logo} src="/ikigai-light.svg" />
        <h4 className={classes.logoText}>Joshua Worley</h4>
      </>
    </Link>
  )
};

export default LogoVertical;