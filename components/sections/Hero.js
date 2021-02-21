import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ButtonWrapped from '../ButtonWrapped'
import RichTextToHTML from '../RichTextToHTML'

const Hero = props => {
  const classes = useStyles();
  const image = props.image.file["en-US"].url;
  const imageTextBackground = props.imageTextBackground.file["en-US"].url
  return (
    <div className={classes.hero}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} md={6} className={classes.heroImg} style={{
          backgroundImage: `url(${image})`
          }}>
        </Grid>
        <Grid item xs={12} md={6} className={classes.introOuter} style={{backgroundImage: `url(${imageTextBackground})`}}>
          {/* <img className={classes.logo} src="/logo-vertical-light.svg" /> */}
          <div className={classes.introInner}>
            <div className={classes.info}>
              <h1 className={classes.heading}>{props.heading}</h1>
              <RichTextToHTML data={props.description}/>
              <div className={classes.ctas}>
                <ButtonWrapped text="About Josh" variant="outlined" link="/about" />
                <div>
                  <a href={props.resumeLink} target="_blank">
                    <h5 className={classes.resumeLink}>JOSH'S RESUME</h5>
                  </a>
                </div>
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
    fontSize: '2rem',
    [theme.breakpoints.up('md')]: {
      marginBottom: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
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
  introOuter: {
    ...theme.backgroundImage,
  },
  introInner: {
    background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.8) 100%), linear-gradient(90deg, #FFFFFE 0%, rgba(17, 6, 23, 0.01) 0%)',
    padding: '40px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...theme.content.outer.sm,
    [theme.breakpoints.up('md')]: {
      minHeight: minHeightMd,
      ...theme.content.outer.md,
      padding: '64px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '160px 0',
    },
    [theme.breakpoints.up('xl')]: {
      padding: '200px 0',
    },
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
    '& p': {
      marginBottom: '0'
    },
    [theme.breakpoints.up('md')]: {
      width: '80%',
      maxWidth: 640,
    }
  },
  ctas: {
    marginTop: '40px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
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
    [theme.breakpoints.up('sm')]: {
      marginLeft: '20px',
    },
    '&:hover': {
      color: theme.colors.primary,
    }
  }
}));


export default Hero;

