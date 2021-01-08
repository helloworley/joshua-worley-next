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
        <Grid item xs={12} md={6} className={classes.introInfo}>
          <img className={classes.logo} src="/logo-vertical-light.svg" />
          <div className={classes.info}>
            <h2 className={classes.heading}>{props.heading}</h2>
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
    marginBottom: '10px',
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
    padding: '60px 20px 70px',
    textAlign: 'center',
    minHeight: minHeightXs,
    [theme.breakpoints.up('sm')]: {
      minHeight: minHeightSm,
      paddingTop: '110px',
    },
    [theme.breakpoints.up('md')]: {
      minHeight: minHeightMd,
      paddingTop: '180px',
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
    maxWidth: '420px',
    margin: '0 auto',
    '& p': {
      marginBottom: '0'
    },
    [theme.breakpoints.up('sm')]: {
      maxWidth: '560px',
    }
  },
  socialsWrapper: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '15px'
  },
  ctas: {
    marginTop: '30px',
  },
  resumeLink: {
    fontFamily: theme.fontFamily.sansSerif,
    fontSize: '14px',
    letterSpacing: '1px',
  }
}));


export default Hero;

