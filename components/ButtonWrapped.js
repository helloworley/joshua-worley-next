import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  buttonWrapped: {
    display: 'inline-block',
  }, 
  button: {
    textTransform:'none',
    backgroundColor: theme.colors.linkGrey,
    color: theme.colors.whisp,
    padding: '10px 40px',
    borderRadius: '0',
    boxShadow: theme.boxShadows.buttonPrimary,
    border: 'none',
    fontWeight: 'bold',
    borderRadius: '30px',
    fontFamily: theme.fontFamily.serif,
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: theme.colors.linkGreyHovered
    }
  },
  outlined: {
    backgroundColor: theme.colors.whisp,
    border: `1px solid ${theme.colors.linkGrey}`,
    color: theme.colors.linkGrey,
    '&:hover': {
      color: theme.colors.whisp
    }
  }
}));

const button = (variant, text) => {
  const classes = useStyles();
  switch (variant) {
    case variant: 'outlined'
       return <Button className={`${classes.button} ${classes.outlined}`}>{text}</Button>        
      break;
  
    default:
        return <Button className={classes.button}>{text}</Button>        
      break;
  }
}

const ButtonWrapped = props => {
  const classes = useStyles();
  const { text, link, variant } = props;
  return link.substring(0, 2) == 'ht' ?
      <span className={classes.buttonWrapped}>
        <a href={link} target="_blank">
          {button(variant, text)}
        </a>
      </span>
    :
      <span className={classes.buttonWrapped}>
        <Link href={link}>
          {button(variant, text)}
        </Link>
      </span>
};

export default ButtonWrapped;


