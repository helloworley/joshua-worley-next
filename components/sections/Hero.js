import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ButtonWrapped from '../ButtonWrapped'
import RichTextToHTML from '../RichTextToHTML'

const Hero = props => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} md={6} className={classes.heroImg} style={{
          backgroundImage: `url(${props.image.file["en-US"].url})`
          }}>
        </Grid>
        <Grid item xs={12} md={6} className={classes.introInfo} style={{backgroundImage: `url('./flux.jpg')`}}>
          {/* <img className={classes.logo} src="/logo-vertical-light.svg" /> */}
          <div className={classes.info}>
            <h1 className={classes.heading}>{props.heading}</h1>
            <RichTextToHTML data={props.description}/>
            <div className={classes.ctas}>
              <ButtonWrapped text="About" variant="outlined" link="/about" />
              <div>
                <a href={props.resumeLink} target="_blank">
                  <h5 className={classes.resumeLink}>RESUME</h5>
                </a>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div> 
  )
};



const minHeightXs = '375px';
const minHeightSm = '520px';
const minHeightMd = '720px';

const useStyles = makeStyles(theme => ({
  buttonWrapped: {
    display: 'inline-block',
    margin: '0 10px 0 0',
  }, 
  button: {
    textTransform:'none',
  },
  heading: {
    marginBottom: '40px',
    fontSize: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      marginBottom: '20px',
      fontSize: '3rem',
    }
  },
  logo: {
    maxWidth: '160px',
    marginBottom: '30px',
    backgroundColor: theme.colors.gray600,
    padding: '30px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '200px',
    }
  },
  introInfo: {
    padding: '40px 20px 70px',
    minHeight: minHeightXs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.backgroundImage,
    [theme.breakpoints.up('md')]: {
      padding: '120px 20px',
      minHeight: minHeightMd,
    },
    [theme.breakpoints.up('lg')]: {
      padding: '240px 20px',
    }
  },
  heroImg: {
    minHeight: minHeightXs,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    [theme.breakpoints.up('sm')]: {
      minHeight: minHeightSm,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: minHeightMd,
    }
  },
  info: {
    margin: '0 auto',
    ...theme.backgroundFilter,
    borderRadius: theme.borderRadius.card,
    padding: '20px',

    '& p': {
      marginBottom: '0'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
      maxWidth: '840px',
      padding: '40px',
    }
  },
  ctas: {
    marginTop: '40px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
    }
  },
  resumeLink: {
    fontFamily: theme.fontFamily.sansSerif,
    color: theme.colors.gray600,
    cursor: 'pointer',
    letterSpacing: '1px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '20px',
    },
    '&:hover': {
      color: theme.colors.primary,
    }
  }
}));


export default Hero;

