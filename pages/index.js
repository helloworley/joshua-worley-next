import '../style/style.scss'
import Link from 'next/link';
import { Grid, Hidden } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import ButtonWrapped from '../components/ButtonWrapped';
import FullWidthImage from '../components/FullWidthImage';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  helloText: {
    fontSize: '3em',
    margin: '0 0 40px',
  },
  centeredWrapper: {
    width: '100%',
    margin: '80px auto 80px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
  homePortrait: {
    height: '200px',
    cursor: 'pointer',
    width: '200px',
    borderRadius: '50%',
  },
  secondButton: {
    margin: '0 0 0 20px',
  },
}));

const profileImage = '/stream-profile.png';


const Page = props => {
  const classes = useStyles();
  return (
    <div id="home">
      <Layout>
        
          <div className={classes.centeredWrapper}>
            <Grid spacing={4} container justify="center">
              <Grid item xs={12} sm={8}>
                {/* <h1 className={classes.h1}>{props.wpData.title.rendered}</h1> */}
                <h1 className={classes.helloText}>
                  Hi! I’m Josh.<br/>
                  I’m a UX Designer living in Tokyo.
                </h1>

                <ButtonWrapped 
                  text="More about me"
                  variant="outlined" 
                  link="/about"
                />
                <ButtonWrapped 
                  className={classes.secondButton}
                  text="My Resume"
                  variant="" 
                  link="/resume"
                />

              </Grid>
              <Grid item xs={12} sm={3}>
                <Link href="/about">
                  <div className={classes.homePortrait} style={{ backgroundImage: `url(${profileImage})` }}></div>
                </Link>
              </Grid>
            </Grid>
          </div>
          
          <FullWidthImage image="/tokyo-from-mori.jpg" />
        


          
        
          {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
      </Layout>
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;