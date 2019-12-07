import '../style/style.scss'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  heading: {
    lineHeight: 1,
  },
  resumeSectionHeading: {
    fontSize: '32px',
    fontWeight: 400,
  },
  resumeSection: {
    margin: '0 0 48px',
    borderTop: 'solid 1px #efefef',
    padding: '40px 0 0'
  },
  entry: {
    margin: '0 0 24px',
  },
  resumeBrand: {
    maxWidth: '100%',
    width: '120px',
    display: 'block',
    margin: '0 0 24px'
  }
}));

const Page = props => {
  const classes = useStyles();
  return (
    <div id="resume">
      <Layout>
        <h1 className={classes.heading}>{props.wpData.title.rendered}</h1>
        <h2>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>
        <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />

        <div id="resume-entries">

          <div className={classes.resumeSection}>
            <Grid container>
              <Grid xs={12}>
                <h3 className={classes.resumeSectionHeading}>Experience</h3>
              </Grid>

                <Grid xs={12} md={3}>
                  <img className={classes.resumeBrand} src="/ptmind.png" />
                  <strong>PTMIND, Inc.</strong><br/>
                  Main: Growth Manager<br/> 
                  Sub: UI Designer, Videographer, <br/> 
                  Frontend Engineer<br/>
                  Shibuya, Tokyo<br/>
                  2019 April - Present
                </Grid>
                <Grid xs={12} md={9}>
                  <strong>Frontend Engineering</strong>
                  <ul>
                    <li>Coded the English and Japanese Ptengine (flagship product) webapps in Vue (Nuxt).
                      <ul>
                        <li><a href="https://www.ptengine.jp" target="_blank" rel="noreferrer noopener"
                            aria-label=" (opens in a new tab)">www.ptengine.jp</a></li>
                        <li><a href="https://www.ptengine.com" target="_blank" rel="noreferrer noopener"
                            aria-label=" (opens in a new tab)">www.ptengine.com</a></li>
                      </ul>
                    </li>
                  </ul>
                  <strong>Digital Marketing</strong>
                  <ul>
                    <li>Co-developed Japanese social media strategy and set up tracking dashboards to measure marketing efforts.
                      Set up social media accounts for Facebook, Twitter, LinkedIn, and YouTube in English and Japanese.</li>
                    <li>Found, hired, and leading a digital marketing intern to manage all social media efforts daily.</li>
                    <li>Travel between Tokyo and Beijing to work with Chinese and Japanese teams to unify global retention
                      strategies.</li>
                    <li>Co-developed retention KPIs and OKRs with Beijing office quarterly.</li>
                    <li>Tranlated all copy on <a href="https://www.ptengine.com" target="_blank">ptengine.com</a> from Japanese
                      to enter the global market.</li>
                  </ul>
                  <strong>Design / Photography / Videography / Branding</strong>
                  <ul>
                    <li>Designed company branded business cards.</li>
                    <li>Took portrait photos for all members' business cards, Intercom profiles, SNS intros, etc. </li>
                    <li>Recorded, edited, and posted case studies for multiple success stories with clients in Japanese. Then
                      measured their effect on sales.
                      <ul>
                        <li>DMM.com (coming soon)</li>
                        <li><a href="https://www.youtube.com/watch?v=1MNbbAn3JIY" target="_blank">RIZAP</a></li>
                        <li><a href="https://www.youtube.com/watch?v=uZQVI9dk5n4" target="_blank">GROOVE X</a></li>
                      </ul>
                    </li>
                    <li>Created UI definitions for Ptengine, including column definitions, font styles, then set up a base
                      framework in Vue to be easily tranlated to code.</li>
                      <li>Consolidated and created a brand / photography / design assets library for the company.</li>
                  </ul>
                </Grid>
              

              <Grid xs={12} md={3}>
                <img className={classes.resumeBrand} src="/tag.png" />
                <strong>tag. (formerly Williams Lea Tag)</strong><br/>
                Senior Web Designer, Digital Producer<br/>
                Shinagawa / Otemachi, Tokyo<br/>
                2018 January – 2019 April
              </Grid>
              <Grid xs={12} md={9}>
                <strong>At Headquarters 2018 December - 2019 April</strong>
                <ul>
                  <li>Create the UI and UX for Cunard (Queen Mary 2, etc) Luxury Cruise Line’s new Japanese website.</li>
                  <li>Worked one-on-one with Cunard Japan’s CEO to understand business goals and design the site to achieve
                    them.</li>
                  <li>Proposed market strategy and customer segmentation for domestic and international markets.</li>
                  <li>Create luxury cruise experience videos for site content and social media campaigns.</li>
                </ul>
                <strong>Onsite Morgan Stanley 2018 January - 2018 December</strong>
                <ul>
                  <li>Worked as a member of Morgan Stanley’s Design Asia studio, designing, coding and project managing for
                    all of Asia.</li>
                  <li>Designed (80%),
                    created (100%) and maintained (100%) Morgan Stanley’s Australian and Chinese websites. Designed for and
                    updated Morgan Stanley's Japanese website (20%)
                    <ul>
                      <li><a href="http://www.morganstanley.com.au" target="_blank" rel="noreferrer noopener"
                          aria-label=" (opens in a new tab)">www.morganstanley.com.au</a></li>
                      <li><a href="http://www.morganstanleychina.com" target="_blank" rel="noreferrer noopener"
                          aria-label=" (opens in a new tab)">www.morganstanleychina.com</a></li>
                      <li><a href="http://www.morganstanley.co.jp/en" target="_blank" rel="noreferrer noopener"
                          aria-label=" (opens in a new tab)">www.morganstanley.co.jp/en</a></li>
                    </ul>
                  </li>
                  <li>Proposed and created the studio’s Sketch library for emailer components and corresponding HTML/CSS
                    component library, decreasing time spent on email creation 75% on average.</li>
                  <li>Handled up to seven projects in a normal day while mentoring another web designer in Japanese.</li>
                </ul>
              </Grid>

              <Grid xs={12} md={3}>
                <img className={classes.resumeBrand} src="/rakuten.png" /> 
                <strong>Rakuten Inc</strong><br/>
                Center of Excellence dept&nbsp;<br/> 
                Frontend engineer, UX/UI Designer<br/>
                Futakotamagawa, Tokyo<br/> 
                2016 April - 2018 January
              </Grid>
              <Grid xs={12} md={9}>
                <ul>
                  <li>Self-start UX/UI improvement projects to benefit the organization, i.e. internal chat app design and
                    coding.</li>
                  <li>Started and finished version 1 of Rakuten’s new group-wide CSS framework and JavaScript React component
                    library to design specs, to eventually be implemented throughout 90 businesses (think Google’s material
                    design, but for Rakuten).</li>
                  <li>https://github.com/rakuten-frontend/rakuten-react-kit<br/> Coded for multiple businesses in HTML, CSS,
                    and JavaScript.</li>
                </ul>
              </Grid>

            </Grid>
          </div>

          <div className={classes.resumeSection}>
            <Grid container>
              <Grid xs={12}>
                <h3 className={classes.resumeSectionHeading}>Education</h3>
              </Grid>

                <Grid xs={12} md={3}>
                  <img className={classes.resumeBrand} src="/carlson.jpg" />
                </Grid>
                <Grid xs={12} md={9}>
                  <strong>Carlson School of Management, University of Minnesota</strong><br/>
                  BS Marketing, East Asian Studies Minor<br/>
                  Minneapolis, Minnesota USA<br/>
                  2010 August - 2015 May
                </Grid>
              

              <Grid xs={12} md={3}>
                <img className={classes.resumeBrand} src="/sophia.png" />
              </Grid>
              <Grid xs={12} md={9}>
                <strong>Sophia University 上智大学</strong><br/>
                One year bi-lateral exchange program<br/>
                Yotsuya, Tokyo Japan<br/>
                2014 September - 2015 August
              </Grid>

              <Grid xs={12} md={3}>
                <img className={classes.resumeBrand} src="/codecademy.png" /> 
              </Grid>
              <Grid xs={12} md={9}>
                <strong>Codecademy.com</strong><br/>
                Class: Build Frontend Web Applications from Scratch<br/>
                2018 September - 2018 November<br/>
                <ul>
                  <li>3 month intensive program focusing on building web application using JavaScript fundamentals, asynchronous requests, and React.js</li>
                </ul>
              </Grid>

              <Grid xs={12} md={3}>
                <img className={classes.resumeBrand} src="/coursera.png" /> 
              </Grid>
              <Grid xs={12} md={9}>
                <strong>Coursera.org</strong><br/>
                <strong>California Institute of Arts (CalArts)</strong><br/>
                <ul>
                  <li>Fundamentals of Graphic Design (2018 February)</li>
                  <li>Introduction to Typography (2018 March)</li>
                </ul>
              </Grid>

            </Grid>
          </div>

        </div>

      </Layout>
    </div>

  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/6`);
  const wpData = await res.json();

  console.log(wpData);

  return { wpData };
};

export default Page;
