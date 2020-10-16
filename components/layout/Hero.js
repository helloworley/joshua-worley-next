import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core/';
import Link from 'next/link';

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
    fontSize: '16px',
    marginBottom: '10px',
    fontWeight: '600'
  },
  logo: {
    maxWidth: '70px',
    marginBottom: '30px',
  },
  introInfo: {
    padding: '60px 20px 70px',
    textAlign: 'center',
    backgroundColor: 'beige',
    minHeight: minHeightXs,
    [theme.breakpoints.up('sm')]: {
      minHeight: minHeightSm,
    },
    [theme.breakpoints.up('md')]: {
      minHeight: minHeightMd,
    }
  },
  heroImg: {
    minHeight: minHeightXs,
    backgroundImage: 'url(/bamboo-forest.jpg)',
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
    borderTop: `solid 1px ${theme.colors.line}`,
    paddingTop: '30px',
    maxWidth: '420px',
    margin: '0 auto'
  }
}));

const Hero = props => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12} md={6} className={classes.introInfo}>
          <img className={classes.logo} src="/ikigai-dark.svg" />
          <div className={classes.info}>
            <h2 className={classes.heading}>Building the future through digital design.</h2>
            <p>Web / App / UX / UI Designer & Frontend Developer.<br/>
              Joshua Worley solves complicated problems with simple solutions.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.heroImg}>
        </Grid>
      </Grid>
    </div> 
  )
};

export default Hero;

