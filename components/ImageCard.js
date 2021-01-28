import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  card: {
    margin: '0 0 40px',
    ...theme.backgroundFilter,
    cursor: 'pointer',
    borderRadius: theme.borderRadius.card,
    boxShadow: theme.boxShadows.card,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: theme.boxShadows.cardHovered
    },
  },
  image: {
    height: '240px',
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0',
    cursor: 'pointer',
    borderTopLeftRadius: theme.borderRadius.card,
    borderTopRightRadius: theme.borderRadius.card,
    [theme.breakpoints.up('sm')]: {
      height: '200px'
    },
    [theme.breakpoints.up('md')]: {
      height: '200px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '220px'
    },
  },
  cardDetails: {
    padding: '20px 25px',
    position: 'relative',
    display: 'relative',
    height: '200px',
    cursor: 'pointer',
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
    color: theme.colors.gray500,
    fontSize: '10px',
    margin: '0',
    textTransform: 'uppercase',
    fontWeight: 'normal',
    position: 'absolute',
    top: '20px',
    right: '20px'
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: '5px',
    marginBottom: '20px',
    textTransform: 'uppercase',
    [theme.breakpoints.up('sm')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '16px',
    }
  },
  logo: {
    maxHeight: '30px',
    maxWidth: '40%',
    marginTop: '0',
    marginBottom: '10px',
  },
  cardTechList: {
    margin: '0',
    padding: '0',
    position: 'absolute',
    bottom: '20px',
    right: '20px'
  },
  cardTechLi: {
    listStyle: 'none',
    display: 'inline-block',
    marginLeft: '10px'
  },
  cardTechUsed: {
    height: '20px',
    width: '20px'
  }
}));

const displayTech = arr => {
  const classes = useStyles();
  return (
    <ul className={classes.cardTechList}>
      {arr.map( tech => {
        const icon = tech.fields.image['en-US'].fields.file['en-US'].url
        const alt = tech.fields.image['en-US'].fields.title['en-US']
        return (
          <li className={classes.cardTechLi} key={alt}>
            <img className={classes.cardTechUsed} src={icon} alt={`${alt} Icon`} />
          </li>
        )
      })}
    </ul>
  )
}

const ImageCard = props => {
  const classes = useStyles();
  const { date, logo, projectTitle, tech } = props;

  return (
    <Link href={`${props.urlBase}/${props.slug}`}>
      <div className={classes.card}>
        <div className={classes.image} style={{ backgroundImage: `url(${props.image.fields.file["en-US"].url})` }}></div>
        <div className={classes.cardDetails}>
          
          <img className={classes.logo} src={logo.fields.file["en-US"].url} alt={logo.fields.title["en-US"]} />
          <h2 className={classes.projectTitle}>{projectTitle}</h2>
          {displayTech(tech)}
          <h4 className={classes.projectMeta}>{date}</h4>
        </div>
      </div>
    </Link>
  )
};

export default ImageCard;


