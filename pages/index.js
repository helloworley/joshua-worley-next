import '../style/style.scss'
import { Hidden } from '@material-ui/core'
import Layout from '../components/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  h1: {
    // fontSize: '1.9em',
    fontWeight: '300',
    margin: '0 0 40px',
    // [theme.breakpoints.up('md')]: {
    //   fontSize: '3.5em',
    // }
  },
  h2: {
    fontSize: '1.2em',
    [theme.breakpoints.up('md')]: {
      fontSize: '2em',
    }
  },
  logo: {
    maxWidth: '120px',
    margin: '0 0 8px',
  },
  centeredWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    },
  },
  bgImageContainer: {
    backgroundPositionX: '580px !important',
    backgroundSize: 'cover !important',
    height: '100vh !important',
    [theme.breakpoints.up('sm')]: {
      backgroundPosition: 'right !important',
    },
    [theme.breakpoints.up('md')]: {
      backgroundPosition: 'center !important',
    },
  },
}));


const bgImageContainer = {
  background: `url(/home-background.jpg)`,
}
const bgOverlay = {
  backgroundColor: 'rgba(0,0,0,.3)',
  width: '100%',
  height: '100vh',
}

const Page = props => {
  const classes = useStyles();
  return (
    <div style={bgImageContainer} className={classes.bgImageContainer} id="home">
      <div style={bgOverlay}>
        <Layout menuColor="#fff" navBackgroundColor="#333">
          <div className={classes.centeredWrapper}>
            <Hidden mdUp>
              <img className={classes.logo} src="/ikigai-light.svg" />
            </Hidden>
            <h1 className={classes.h1}>{props.wpData.title.rendered}</h1>
          </div>
          <div className={classes.centeredWrapper}>
            <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />
          </div>
        </Layout>
      </div>
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;