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
  }
}));

const ButtonWrapped = props => {
  const classes = useStyles();
  if (props.link.indexOf('/') !== 0 ) {
    return (
      <span className={classes.buttonWrapped}>
        <Link href={props.link}>
          <Button className={classes.button} variant={props.variant}>{props.text}</Button>
        </Link>
      </span>
    )
  }
  return <span className={classes.buttonWrapped}>
    <a href={props.link}>
      <Button className={classes.button} variant={props.variant}>{props.text}</Button>  
    </a>
  </span>
};

export default ButtonWrapped;


