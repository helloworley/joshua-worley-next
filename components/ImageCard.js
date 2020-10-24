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
    height: 240,
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0',
  },
  cardDetails: {
    padding: '20px 25px',
    position: 'relative',
    backgroundColor: theme.colors.white
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
  projectMeta: {
    color: theme.colors.meta,
    fontSize: '10px',
    margin: '0',
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: '5px',
    marginBottom: '20px',
  },
  logo: {
    maxHeight: '50px',
    maxWidth: '150px'
  },
}));

const ImageCard = props => {
  const classes = useStyles();
  console.log('props', props)
  const { brand, date, logo, projectTitle, projectType } = props;
  return (
    <Link href={`${props.urlBase}/${props.link}`}>
      <div className={classes.card}>
        <div className={classes.image} style={{ backgroundImage: `url(${props.image.fields.file["en-US"].url})` }}></div>
        <div className={classes.cardDetails}>
          <img className={classes.logo} src={logo.fields.file["en-US"].url} alt={logo.fields.title["en-US"]} />
          <h4 className={classes.projectMeta}>{projectType}</h4>
          <h4 className={classes.projectMeta}>{date}</h4>
          <h2 className={classes.projectTitle}>{projectTitle}</h2>
        </div>
      </div>
    </Link>
  )
};

export default ImageCard;


