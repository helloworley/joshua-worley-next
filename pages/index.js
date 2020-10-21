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
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import ServicesOffered from '../components/sections/ServicesOffered'
import client from '../contentful/client'
import RecentProjects from '../components/sections/RecentProjects'

import fetchAbout from '../contentful/fetchAbout'
import fetchServicesOffered from '../contentful/fetchServicesOffered'


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

async function fetchContent(type, order) {
  console.log(`getting entry for ${type}`)
  const entries = await client.getEntries({
    content_type: type,
    order: order,
    locale: '*'
  }).catch((error) => {
    console.error(error);
  })
  console.log('entries', entries)
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}`)
}

const Page = props => {
  const classes = useStyles();
  // Data from Contentful
  const [ contentfulData, setPosts ] = useState([])
  const contentfulDataCheck = Object.entries(contentfulData).length !== 0 

  useEffect(() => {
    async function getPosts() {

      // about
      const about = await fetchAbout()

      // services offered
      let servicesOffered = []
      await fetchServicesOffered().then(res => {
        res.map( service => {
          servicesOffered.push(service.fields)
        })
      })

      // recent projects
      let recentProjects = []
      await fetchContent('recentProject', '-fields.orderingDate').then(res => {
        res.map( project => {
          recentProjects.push(project.fields)
        })
      })

      setPosts({
        about: about[0].fields,
        servicesOffered: servicesOffered,
        recentProjects: recentProjects
      })
    }
    getPosts()
  }, [])

  console.log('contentful data', contentfulData)

  return (
    <div id="home">
      <Layout>
        
        { contentfulDataCheck ? 
          <Hero 
            resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}
          />
        : null}

        { contentfulDataCheck ? 
          <About
            imgSrc={contentfulData.about.image["en-US"].fields.file["en-US"].url}
            imageAbout=""
            content={contentfulData.about.introduction["en-US"].content}
            resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}
            resumeAbout={contentfulData.about.resume["en-US"].fields.description["en-US"]}
          />
        : null}

        { contentfulDataCheck ?
          <ServicesOffered services={contentfulData.servicesOffered}/>
        : null}

        { contentfulDataCheck ?
          <RecentProjects projects={contentfulData.recentProjects}/>
        : null}
        
          {/* <FullWidthImage image="/tokyo-from-mori.jpg" /> */}

      </Layout>
      { contentfulDataCheck ?
        <Footer resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}/>
      : null}
    </div>
  )
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/97`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;