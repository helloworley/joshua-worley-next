import '../style/style.scss'
import { Grid, Hidden } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import ButtonWrapped from '../components/ButtonWrapped';
import FullWidthImage from '../components/FullWidthImage';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({
  
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
  aboutPortrait: {
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  logoImage: {
    width: '100%',
    backgroundPosition: 'center',
    height: '100%',
    backgroundRepeat: 'no-repeat',
  }
  
}));

const profileImage = '/profile-200221-square.jpg';
const logoImage = '/ikigai-dark.svg';


const Page = props => {
  const classes = useStyles();
  return (
    <div id="home">
      <Layout>

          <div className={classes.centeredWrapper}>
          
            <Grid spacing={10} container justify="center">
              <Grid item xs={12} sm={4}>
                {/* <h1 className={classes.h1}>{props.wpData.title.rendered}</h1> */}
                <h1 className={classes.helloText}>About</h1>
                <div className={classes.aboutPortrait} style={{ backgroundImage: `url(${profileImage})` }}></div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <h2>Background</h2>
                <p>
                  Hi! I’m notJosh. I’m a UX Designer living in Tokyo for 5 years. Over those past 5 years, I’ve grown as a designer, marketer, engineer, bilingual and overall okay human being.
                  <br/><br/>
                  The son of a US military family, I was accidentally born in Okinawa, Japan in 1992. We then left when I was 2 years old, moving all across the United States to places like North Carolina, Alaska, California, Florida, and Minnesota (Alaska was the best, and no people don’t live in igloos).
                  <br/><br/>
                  While studying Marketing at the University of Minnesota, I decided that becoming bilingual was my top priority in life. I was born in Japan, so I picked Japanese and decided to study abroad for one year at Sophia University. After graduating with a degree in Marketing and a minor in East Asian Studies, I decided to start working in Tokyo in order to continue studying Japanese and learn tech and design. 
                  <br/><br/>
                  Life in Tokyo has been challenging but very rewarding. I have been blessed here with the best friends in the world and opportunities to keep growing both personally and professionally. 
                  <br/><br/>
                  I don't know what the future holds, but I do know that luck is when preparation meets opportunity, so for now I'll keep working every day to become the best Josh Worley I can possibly be for those who need me. 
                  <br/><br/>
                  Thanks for reading! <br/>
                  Josh
                </p>

              </Grid>
            </Grid>
          </div>
          
          <FullWidthImage image="/tokyo-from-mori.jpg" />

          <div className={classes.centeredWrapper}>
            <Grid spacing={10} container justify="center">
              <Grid item xs={12} sm={8}>
                <h2>“What a weird logo”</h2>
                <p>
                  During September 2019, I got on a plane to Okinawa, Japan to celebrate my 27th birthday (and recent break up). No one told me that September is typhoon season in Okinawa, so I was left with a lot of time sitting in an AirBnb to study, journal, and "find myself".
                  <br/><br/>
                  I stumbled upon the concept of Ikigai. It's been somewhat of a buzzword lately. Ikigai is originally a Japanese concept that means "a reason for being". It's basically a Venn Diagram with four circles. The circles represent "what you love", "what you're good at", "what the world needs", and "what you can be paid for". The intersection of all four is your Ikigai.
                  <br/><br/>
                  Looking for my own "reason for being" and direction in my life, I contemplated Ikigai and decided that the framework could help me find my purpose in life. So on my 27th birthday, I went to the local tattoo shop and got this symbol tattooed as a reminder to follow the Ikigai concept in life and career. Since then, I’ve adopted it as my professional logo.
                </p>

              </Grid>
              <Grid item xs={12} sm={4}>
                {/* <h1 className={classes.h1}>{props.wpData.title.rendered}</h1> */}
                <div className={classes.logoImage} style={{ backgroundImage: `url(${logoImage})` }}></div>
              </Grid>
            </Grid>
          </div>
        


          
        
          {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
      </Layout>
      <Footer />
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;