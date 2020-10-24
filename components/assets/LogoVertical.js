import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  logo: {
    textAlign: 'center',
  },
  logoIcon: {
    height: '50px',
  },
  logoText: {
    margin: '12px auto 0',
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
      <div className={classes.logo}>
        <img className={classes.logoIcon} src="/ikigai-light.svg" />
        <h4 className={classes.logoText}>Joshua Worley</h4>
      </div>
    </Link>
  )
};

export default LogoVertical;