import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  card: {
    margin: '0 0 24px',
    boxShadow: '0 10px 16px 0 rgba(205, 217, 231, 0.47)',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '0 10px 16px 0 rgba(205, 217, 231, 0.8)',
    },
  },
  image: {
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0',
    height: '400px',
    [theme.breakpoints.up('sm')]: {
      height: '580px',
    },
  },
  cardDetails: {
    height: '108px',
    padding: '5% 8%',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: '3% 8%',  
      height: '140px',
    },
  },
  heading: {
    margin: '0',
    color: theme.palette.primary.main,
    fontSize: '1.1em',
  },
  brand: {
    margin: '0 0 10px',
    fontSize: '.8em',
  },
  date: {
    position: 'absolute',
    right: '8%',
    top: '20%',
    color: theme.palette.primary.main,
    color: 'rgba(0,0,0,.4)',
    fontSize: '.8em',
  },
  excerpt: {
    color: 'rgba(0,0,0,.4)',
    fontSize: '.8em',
  }

}));

const ImageCardLarge = props => {
  const classes = useStyles();
  return (
    <Link href={`${props.urlBase}/${props.link}`}>
      <div className={classes.card}>
        <div className={classes.image} style={{ backgroundImage: `url(${props.image})` }}></div>
        <div className={classes.cardDetails}>
          <Typography variant="h5" className={classes.heading}>{props.name}</Typography>
          <Typography className={classes.brand}>{props.brand}</Typography>
          <Typography className={classes.date}>{props.date}</Typography>
          <Typography className={classes.excerpt}>{props.excerpt}</Typography>
        </div>
      </div>
    </Link>
  )
};

export default ImageCardLarge;


