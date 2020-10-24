import { useEffect, useState } from 'react'
import '../style/style.scss'
import Layout from '../components/MyLayout';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
import About from '../components/sections/About'
import client from '../contentful/client'
import fetchContent from  '../contentful/fetchContent'


const useStyles = makeStyles(theme => ({
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
}));


const Page = props => {
  const classes = useStyles();
  // Data from Contentful
  const [ contentfulData, setPosts ] = useState([])
  const contentfulDataCheck = Object.entries(contentfulData).length !== 0 

  useEffect(() => {
    async function getPosts() {

      // about
      const about = await fetchContent('about', '')

      setPosts({
        about: about[0].fields,
      })
    }
    getPosts()
  }, [])


  return (
    <div id="about">
      <Layout>

        { contentfulDataCheck ? 
          <About
            imgSrc={contentfulData.about.image["en-US"].fields.file["en-US"].url}
            imageAbout=""
            content={contentfulData.about.introduction["en-US"].content}
            resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}
            resumeAbout={contentfulData.about.resume["en-US"].fields.description["en-US"]}
          />
        : null}

      </Layout>
    </div>
  )
}

export default Page;