import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import '../style/style.scss'
import Layout from '../components/layout/MyLayout';
import Footer from '../components/layout/Footer';
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
      const about = await fetchContent({
        type: 'about'
      })
      const resume = await fetchContent({
        type: 'resume'
      })

      setPosts({
        about: about[0].fields,
        seoTitle: about[0].fields.seoTitle["en-US"],
        seoDescription: about[0].fields.seoDescription["en-US"],
        resume: resume[0].fields.english["en-US"].fields.file["en-US"].url,
        resumeAbout: resume[0].fields.english["en-US"].fields.description["en-US"]
      })
    }
    getPosts()
  }, [])

  console.log('contentful data', contentfulData)


  return (
    <div id="about">
      { contentfulDataCheck ? 
      <>
        <NextSeo
          title={`Joshua Worley - ${contentfulData.seoTitle}`}
          description={contentfulData.seoDescription}
        />
        <Layout>  
          <About
            imgSrc={contentfulData.about.image["en-US"].fields.file["en-US"].url}
            imageAbout=""
            content={contentfulData.about.introduction["en-US"].content}
            resumeLink={contentfulData.resume}
            resumeAbout={contentfulData.resumeAbout}
          />
        </Layout>
      </>
      : null}
    </div>
  )
}

export default Page;