import '../style/style.scss'
import Link from 'next/link';
import { Grid, Hidden } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import ButtonWrapped from '../components/ButtonWrapped';
import FullWidthImage from '../components/FullWidthImage';
import ImageCard from '../components/ImageCard';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Hero from '../components/layout/Hero'

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
  
  homePortrait: {
    cursor: 'pointer',
    width: '220px',
    maxWidth: '100%',
    height: '220px',
    maxHeight: '100%',
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
        <Hero />
        
        
          
          


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
                  <h3 className={classes.projectTypeHeading}>UX UI</h3>
                    <ImageCard
                      className={classes.imageCard}
                      name="Tidy Finance"
                      brand=""
                      link="tidy-finance"
                      image="https://jw.helloworley.com/wp-content/uploads/2020/02/tidy-finance-feature-1.jpg"
                      date="February 21, 2020"
                      excerpt='"Grow Your Finances" - Financial Goals Mobile App Concept'
                      id=""
                      urlBase="uxui"
                    />
                    <div className={classes.projectTypeButtonWrapper}>
                      <ButtonWrapped 
                        text="More UX UI Projects"
                        variant="outlined" 
                        link="/uxui"
                      />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.projectType}>
                  <h3 className={classes.projectTypeHeading}>Branding</h3>
                  <ImageCard
                    className={classes.imageCard}
                    name="PKMASA"
                    brand=""
                    link="pkmasa"
                    image="https://jw.helloworley.com/wp-content/uploads/2020/02/pkmasa-feature-white.png"
                    date="September 21, 2019"
                    excerpt="Logo and Branding kit for PKMASA, a multitalented aerobatics teacher. Adobe Illustrator, Photoshop, Sketch."
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
        

          <FullWidthImage image="/tokyo-from-mori.jpg" />


          
        
          {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
      </Layout>
      <Footer/>
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;