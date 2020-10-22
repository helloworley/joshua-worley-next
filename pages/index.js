import { useEffect, useState } from 'react'

import '../style/style.scss'
import Layout from '../components/MyLayout';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/sections/Hero'
import ServicesOffered from '../components/sections/ServicesOffered'
import client from '../contentful/client'
import RecentProjects from '../components/sections/RecentProjects'
import ThankYou from '../components/sections/ThankYou'

import fetchContent from '../contentful/fetchContent'


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

const menuItems = [
  {
    name: '/about',
    link: 'About'
  },
  {
    name: '/projects',
    link: 'Projects'
  },
  {
    name: '/projects',
    link: 'Projects'
  },
]



const IndexPage = props => {
  const classes = useStyles();
  // Data from Contentful
  const [ contentfulData, setPosts ] = useState([])
  const contentfulDataCheck = Object.entries(contentfulData).length !== 0 

  useEffect(() => {
    async function getPosts() {

      // about
      const about = await fetchContent('about', '')

      // services offered
      let servicesOffered = []
      await fetchContent('serviceOffered', '').then(res => {
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

      // thank you 
      const thankYou = await fetchContent('thankYou', '')

      setPosts({
        about: about[0].fields,
        servicesOffered: servicesOffered,
        recentProjects: recentProjects,
        thankYou: thankYou[0].fields
      })
    }
    getPosts()
  }, [])

  // console.log('contentful data', contentfulData)

  return (
    <div id="home">
      { contentfulDataCheck ?
        <>
          <Layout>
            <Hero resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}/>
            <ServicesOffered services={contentfulData.servicesOffered}/>
            <RecentProjects projects={contentfulData.recentProjects}/>
            <ThankYou content={contentfulData.thankYou} />
          </Layout>
          <Footer resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}/>
        </>
      : null}
    </div>
    
  )
}

export default IndexPage;