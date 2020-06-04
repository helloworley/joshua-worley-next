import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core/';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  back: {
    margin: '60px 0 0',
    textAlign: 'center'
  },
  button: {
    textTransform: 'capitalize',
    // position: 'fixed',
    // top: '120px',
    // left: '30px',
    backgroundColor: 'white'
  }, 
}));

const ButtonWrapped = props => {
  const classes = useStyles();
  return (
    <div className={classes.back}>
      <Link href={props.link}>
      <Button
        variant="outlined"
        className={classes.button}
        startIcon={<KeyboardArrowLeftIcon />}
      >
        {props.text}
      </Button>
      </Link>
    </div>
  )
};

export default ButtonWrapped;


