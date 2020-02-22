import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
  fullWidthImage: {
    padding: '40px 0',
    height: '400px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }, 

}));

const FullWidthImage = props => {
  const classes = useStyles();
  return (
    <div className={classes.fullWidthImage} style={{ backgroundImage: `url(${props.image})` }}>
      <Typography variant="h5" className={classes.heading}>{props.name}</Typography>
      <Typography className={classes.date}>{props.date}</Typography>
      <Typography className={classes.excerpt}>{props.excerpt}</Typography>
    </div>
  )
};

export default FullWidthImage;


