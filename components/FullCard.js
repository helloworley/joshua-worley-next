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
    width: '100%',
    height: 'auto',
    color: 'white',
    margin: '0 0 24px',
  }

}));

const FullCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <img className={classes.image} src={props.image} />
      <Typography variant="h5" className={classes.heading}>{props.name}</Typography>
      <Typography className={classes.date}>{props.date}</Typography>
      <Typography>{props.excerpt}</Typography>
    </div>
  )
};

export default FullCard;


