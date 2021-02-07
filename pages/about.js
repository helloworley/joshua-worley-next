import { makeStyles } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo'
import '../style/style.scss'
import Layout from '../components/layout/MyLayout';
import About from '../components/sections/About'
import fetchContent from  '../contentful/fetchContent'

const useStyles = makeStyles(theme => ({
  pageContainer: {
    padding: '20px 0 60px',
    [theme.breakpoints.up('md')]: {
      padding: '40px 0 80px',
    }
  },
}));


const AboutPage = props => {
  const classes = useStyles();

  return (
    <div id="about">
      <NextSeo
        title={`Josh Worley - ${props.seoTitle}`}
        description={props.seoDescription}
      />
      <Layout>
        <div className={classes.pageContainer}>
          <About
            imgSrc={props.about.image["en-US"].fields.file["en-US"].url}
            imageAbout=""
            content={props.about.introduction["en-US"].content}
            resumeLink={props.resume}
            resumeAbout={props.resumeAbout}
          />
        </div>
      </Layout>
    </div>
  )
}


AboutPage.getInitialProps = async (ctx) => {
  // about
  const about = await fetchContent({
    type: 'about'
  })
  const resume = await fetchContent({
    type: 'resume'
  })
  return { 
    about: about[0].fields,
    seoTitle: about[0].fields.seoTitle["en-US"],
    seoDescription: about[0].fields.seoDescription["en-US"],
    resume: resume[0].fields.english["en-US"].fields.file["en-US"].url,
    resumeAbout: resume[0].fields.english["en-US"].fields.description["en-US"]
  }
}


export default AboutPage;