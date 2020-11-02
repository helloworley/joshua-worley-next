import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  logo: {
    textAlign: 'center',
  },
  logoIcon: {
    height: '80px',
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
        {
          props.color == "white" ?
            <img className={classes.logoIcon} src="/logo-vertical-light.svg" />
          :
            <img className={classes.logoIcon} src="/logo-vertical-dark.svg" />
        }
        
      </div>
    </Link>
  )
};

export default LogoVertical;