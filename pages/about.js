import { makeStyles } from '@material-ui/core/styles';
import { NextSeo } from 'next-seo'
import '../style/style.scss'
import Layout from '../components/layout/MyLayout';
import fetchContent from  '../contentful/fetchContent'
import RichTextToHTML from '../components/RichTextToHTML'
import ButtonWrapped from '../components/ButtonWrapped'
import SectionHeading from '../components/layout/SectionHeading'

const useStyles = makeStyles(theme => ({

  about: {
    minHeight: '400px',
  },
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px 80px',
    backgroundColor: theme.colors.white,
    zIndex: 2,
    [theme.breakpoints.up('md')]: {
      padding: '80px 40px 80px',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '80px 40px',
    },
  },
  image: {
    width: '100%',
  },
  buttonContainer: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    textAlign: 'center',
    '& small': {
      marginTop: 20
    }
  },
  [theme.breakpoints.up('md')]: {
    about: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    imageContainer: {
      zIndex: 1,
    },
    imageContainerInner: {
      height: 'calc(100vh - 80px)',
      width: '50%',
      position: 'fixed',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom'
    },
    image: {
      display: 'none'
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      '& small': {
        marginLeft: 20,
        marginTop: 0
      }
    }
  }
}));


const AboutPage = props => {
  const classes = useStyles();
  const { resume, resumeAbout, about } = props;
  const imageUrl = about.image["en-US"].fields.file["en-US"].url;
  const content = about.introduction["en-US"].content;
  return (
    <div id="about">
      <NextSeo
        title={`Josh Worley - ${props.seoTitle}`}
        description={props.seoDescription}
      />
      <Layout>
        <div className={classes.pageContainer}>
          <div className={classes.about}>

            <img src={imageUrl} className={classes.image} />
            <div className={classes.imageContainer}>
              <div className={classes.imageContainerInner} style={{backgroundImage: `url(${imageUrl})`}}></div>
            </div>

            <main className={classes.infoWrapper}>
              <RichTextToHTML data={content} />
              <div className={classes.buttonContainer}>
                <ButtonWrapped 
                  text="Josh's Resume"
                  variant="outlined" 
                  link={resume}
                  className={classes.projectTypeButtonWrapper}
                />
                <small className={classes.resumeAbout}>{resumeAbout}</small>
              </div>
            </main>
          </div>
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