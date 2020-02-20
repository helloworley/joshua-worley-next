import '../style/style.scss'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import ResumeExperience from '../components/resume/ResumeExperience';
import ResumeEducation from '../components/resume/ResumeEducation';
import ResumeSkills from '../components/resume/ResumeSkills';
import ResumeAwards from '../components/resume/ResumeAwards';

const useStyles = makeStyles(theme => ({
  centeredWrapper: {
    width: '100%',
    margin: '120px auto 80px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
  heading: {
    lineHeight: 1,
  },
  resumeSectionHeading: {
    fontSize: '1.8em !important',
    fontWeight: 600,
    // color: '#bababa',
    margin: '32px 0 64px !important',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  resumeSection: {
    margin: '0 0 48px',
    borderTop: 'solid 1px #efefef',
    padding: '32px 0 0'
  },
  intro: {
    margin: '0 0 64px',
  },
  profileWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    }
  },
  profile: {
    width: '100%',
    maxWidth: '100%',
    margin: '0 0 32px',
    [theme.breakpoints.up('sm')]: {
      width: 'initial',
      paddingRight: '16px',
      margin: '0',
    }
  }
}));

const Page = props => {
  const classes = useStyles();
  return (
    <div id="resume">
      <Layout>
      <div className={classes.centeredWrapper}>
            
        <h1 className={classes.heading}>{props.wpData.title.rendered}</h1>

        <div className={classes.intro}>
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className={classes.profileWrapper}>
                <img src="/joshua-worley.jpg" alt="Joshua Worley" className={classes.profile} />
              </div>
            </Grid>
            <Grid item xs={12} sm={9}>
              <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />
            </Grid>
          </Grid>
        </div>

        <div id="resume-entries">

          <div className={classes.resumeSection}>
            <Grid item xs={12}>
              <h3 className={classes.resumeSectionHeading}>Experience</h3>
            </Grid>
            <ResumeExperience />
          </div>

          <div className={classes.resumeSection}>
            <Grid item xs={12}>
              <h3 className={classes.resumeSectionHeading}>Education</h3>
            </Grid>
            <ResumeEducation />
          </div>

          <div className={classes.resumeSection}>
            <Grid item xs={12}>
              <h3 className={classes.resumeSectionHeading}>Awards</h3>
            </Grid>
            <ResumeAwards />
          </div>

          <div className={classes.resumeSection}>
            <Grid item xs={12}>
              <h3 className={classes.resumeSectionHeading}>Skills</h3>
            </Grid>
            <ResumeSkills />
          </div>

        </div>
        </div>
      </Layout>
    </div>

  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/6`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;
