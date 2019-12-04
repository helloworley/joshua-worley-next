import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';


const useStyles = makeStyles(theme => ({
  card: {
    margin: '0 0 40px',
    borderRadius: 8,
  },
  heading: {
    margin: '0 0 8px',
  },
  date: {
    margin: '0 0 8px',
    color: theme.palette.primary.main
  },
  image: {
    height: 240,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0 0 24px',
  }

}));

const ImageCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <div className={classes.image} style={{ backgroundImage: `url(${props.image})` }}></div>
      <Typography variant="h5" className={classes.heading}>{props.name}</Typography>
      <Typography className={classes.date}>{props.date}</Typography>
      <Typography>{props.excerpt}</Typography>
    </div>
  )
};

export default ImageCard;


