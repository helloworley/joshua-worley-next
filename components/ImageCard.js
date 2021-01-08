import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  card: {
    margin: '0 0 30px',
    boxShadow: '0 10px 16px 0 rgba(205, 217, 231, 0.47)',
    cursor: 'pointer',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
    border: `solid 1px ${theme.colors.gray500}`,
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
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '30px',
  },
  cardDetails: {
    padding: '20px 25px',
    position: 'relative',
    backgroundColor: theme.colors.white,
    [theme.breakpoints.up('sm')]: {
      height: '240px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '210px'
    }
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
    textTransform: 'uppercase',
    fontWeight: 'normal'
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
    maxWidth: '120px',
    marginTop: '20px',
  },
  cardTechList: {
    margin: '0',
    padding: '0',
    float: 'right'
  },
  cardTechLi: {
    listStyle: 'none',
    display: 'inline-block',
    marginLeft: '10px'
  },
  cardTechUsed: {
    maxHeight: '20px',
    maxWidth: '20px'
  }
}));

const displayTech = arr => {
  const classes = useStyles();
  return (
    <ul className={classes.cardTechList}>
      {arr.map( tech => {
        // console.log('tech! ', tech)
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
  // console.log('props', props)
  const { brand, slug, date, logo, projectTitle, projectType, tech } = props;

  return (
    <Link href={`${props.urlBase}/${props.slug}`}>
      <div className={classes.card}>
        <div className={classes.image} style={{ backgroundImage: `url(${props.image.fields.file["en-US"].url})` }}></div>
        <div className={classes.cardDetails}>
          {displayTech(tech)}
          <img className={classes.logo} src={logo.fields.file["en-US"].url} alt={logo.fields.title["en-US"]} />
          <h2 className={classes.projectTitle}>{projectTitle}</h2>
          {/* <h4 className={classes.projectMeta}>{projectType}</h4> */}
          <h4 className={classes.projectMeta}>{date}</h4>
        </div>
      </div>
    </Link>
  )
};

export default ImageCard;


