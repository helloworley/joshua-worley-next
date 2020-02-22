import '../style/style.scss'
import Link from 'next/link';
import { Grid, Hidden } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import ButtonWrapped from '../components/ButtonWrapped';
import FullWidthImage from '../components/FullWidthImage';
import ImageCard from '../components/ImageCard';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles(theme => ({
  helloText: {
    fontSize: '3em',
    margin: '0 0 10px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'initial',
    }
  },
  moreHelloText: {
    margin: '0 0 40px',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'initial',
    }
  },
  centeredHeading: {
    textAlign: 'center',
    margin: '0 auto 30px'
  },
  projectType: {
    margin: '0 0 50px',
  },
  projectTypeHeading: {
    textAlign: 'center',
    margin: '0 auto 30px',
  },
  projectTypeButtonWrapper: {
    margin: '40px auto 0',
    textAlign: 'center',
  },
  moreAboutMeLinksWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'initial',
    }
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
    backgroundPosition:'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      margin: '0',
    }
  },
  secondButton: {
    margin: '0 0 0 20px',
  },
}));

const profileImage = '/profile-200221-circle@2x.png';


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
                  I’m a UX/UI Designer living in Tokyo.
                </h1>
                <p className={classes.moreHelloText}>
                  I also do Frontend Development, Marketing and Photography.
                </p>

                <div className={classes.moreAboutMeLinksWrapper}>
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

                </div>

              </Grid>
              <Grid item xs={12} sm={3}>
                <Link href="/about">
                  <div className={classes.homePortrait} style={{ backgroundImage: `url(${profileImage})` }}></div>
                </Link>
              </Grid>
            </Grid>
          </div>
          
          <FullWidthImage image="/tokyo-from-mori.jpg" />


          <div className={classes.centeredWrapper}>
            <Grid spacing={4} container justify="center">
              <Grid item xs={12}>
                {/* <h1 className={classes.h1}>{props.wpData.title.rendered}</h1> */}
                <h2 className={classes.centeredHeading}>
                  Check out some of my latest work!
                </h2>
              </Grid>
            </Grid>
            <Grid spacing={4} container justify="center">
              <Grid item xs={12} md={4}>
                <div className={classes.projectType}>
                  <h3 className={classes.projectTypeHeading}>UX</h3>
                    <ImageCard
                      className={classes.imageCard}
                      name="Tidy Finance"
                      brand=""
                      link="tidy-finance"
                      image="https://jw.helloworley.com/wp-content/uploads/2020/02/tidy-finance-feature.jpg"
                      date="February 21, 2020"
                      excerpt='"Grow Your Finances" - Financial Goals Mobile App Concept'
                      id=""
                      urlBase="ux"
                    />
                    <div className={classes.projectTypeButtonWrapper}>
                      <ButtonWrapped 
                        text="More UX Projects"
                        variant="outlined" 
                        link="/ux"
                      />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.projectType}>
                  <h3 className={classes.projectTypeHeading}>Branding</h3>
                  <ImageCard
                    className={classes.imageCard}
                    name="Mango Factory"
                    brand=""
                    link="mango-factory"
                    image="https://jw.helloworley.com/wp-content/uploads/2014/03/mangofactory-branding.jpg"
                    date="March 6, 2014"
                    excerpt="Menu, Ad, Photography and Brand design for Minneapolis Sushi Restaurant. Adobe InDesign, Illustrator, Lightroom."
                    id=""
                    urlBase="branding"
                  />
                  <div className={classes.projectTypeButtonWrapper}>
                    <ButtonWrapped 
                      text="More Branding Projects"
                      variant="outlined" 
                      link="/branding"
                    />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.projectType}>
                  <h3 className={classes.projectTypeHeading}>Development</h3>
                  <ImageCard
                    className={classes.imageCard}
                    name="ptengine.jp"
                    brand=""
                    link="ptengine-jp"
                    image="https://jw.helloworley.com/wp-content/uploads/2019/12/ptengine-desktop-mobile.jpg"
                    date="December 4, 2019"
                    excerpt="Ptengine analytics platform product website. Nuxt.js, Vue.js, Vuetify, Wordpress Rest API."
                    id=""
                    urlBase="development"
                  />
                  <div className={classes.projectTypeButtonWrapper}>
                    <ButtonWrapped 
                      text="More Development Projects"
                      variant="outlined" 
                      link="/development"
                      className={classes.projectTypeButtonWrapper}
                    />
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        


          
        
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