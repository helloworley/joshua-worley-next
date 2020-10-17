import { useEffect, useState } from 'react'

import '../style/style.scss'
import { Grid, Hidden } from '@material-ui/core/';
import Layout from '../components/MyLayout';
import ButtonWrapped from '../components/ButtonWrapped';
import FullWidthImage from '../components/FullWidthImage';
import ImageCard from '../components/ImageCard';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';
import Hero from '../components/layout/Hero'
import About from '../components/About'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

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

const types = [
  'about',
]


const Page = props => {
  const classes = useStyles();

  async function fetchEntries() {
    for (const type of types) {
      const entries = await client.getEntries({
        content_type: type,
        locale: '*'
      }).catch((error) => {
        console.error(error);
      })
      console.log('entries', entries)
      if (entries.items) return entries.items
      console.log(`Error getting Entries for ${contentType.name}`)
    }
  }

  // Data from Contentful
  const [ about, setPosts] = useState([])
  const aboutObj = about.length > 0 ? about[0].fields : null
  
  console.log('about', aboutObj)

  useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchEntries()
      setPosts([...allPosts])
    }
    getPosts()
  }, [])

  return (
    <div id="home">
      <Layout>
        <Hero />

        {about.length > 0 ? 
          <About
            imgSrc={aboutObj.image["en-US"].fields.file["en-US"].url}
            imageAbout=""
            content={aboutObj.introduction["en-US"].content}
            resumeLink={aboutObj.resume["en-US"].fields.file["en-US"].url}
            resumeAbout={aboutObj.resume["en-US"].fields.description["en-US"]}
          />
        : null}
        
        
        <ButtonWrapped 
          text="More Development Projects"
          variant="outlined" 
          link="/development"
          className={classes.projectTypeButtonWrapper}
        />

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