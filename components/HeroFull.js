import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  heroOuter: {
    backgroundPosition: 'center',
  },
  heroFull: {
    minHeight: '376px',
    backgroundColor: 'rgba(0, 0, 0, .55)',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  heroFullInner: {
    padding: '120px 0 0',
  },
  image: {
    height: 240,
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0',
  },
  heading: {
    color: 'white',
    fontSize: '3em',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '0 auto 20px',
  },
  excerpt: {
    color: 'white',
    margin: '0 auto 20px',
    textAlign: 'center',
  },
  date: {
    color: 'white',
    margin: '0 auto',
    textAlign: 'center',
    fontSize: '.8em', 
  },
}));

const ImageCard = props => {
  const classes = useStyles();
  return (
    <div className={classes.heroOuter} style={{backgroundImage: `url(${props.image})`}}>
      <div className={classes.heroFull}>
        <div className={classes.heroFullInner}>
          <Typography variant="h5" className={classes.heading}>{props.title}</Typography>
          <Typography className={classes.excerpt}>{props.excerpt}</Typography>
          <Typography className={classes.date}>{props.date}</Typography>
        </div>
      </div>
    </div>
  )
};

export default ImageCard;


