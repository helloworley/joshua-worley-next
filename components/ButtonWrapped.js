import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  buttonWrapped: {
    display: 'inline-block',
    margin: '0 10px 0 0',
  }, 
  button: {
    textTransform:'none',
    backgroundColor: theme.colors.linkGrey,
    color: theme.colors.whisp,
    padding: '10px 20px',
    borderRadius: '0',
    boxShadow: theme.boxShadows.buttonPrimary,
    border: 'none',
    fontWeight: 'bold',
    fontFamily: theme.fontFamily.serif,
    '&:hover': {
      backgroundColor: theme.colors.linkGreyHovered
    }
  },
}));

const ButtonWrapped = props => {
  const classes = useStyles();
  return props.link.substring(0, 2) == 'ht' ?
      <span className={classes.buttonWrapped}>
        <a href={props.link} target="_blank">
          <Button className={classes.button} variant={props.variant}>{props.text}</Button>  
        </a>
      </span>
    :
      <span className={classes.buttonWrapped}>
        <Link href={props.link}>
          <Button className={classes.button} variant={props.variant}>{props.text}</Button>
        </Link>
      </span>
};

export default ButtonWrapped;


