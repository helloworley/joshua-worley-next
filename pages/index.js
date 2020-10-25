import { useEffect, useState } from 'react'

import '../style/style.scss'
import Layout from '../components/layout/MyLayout';
import Footer from '../components/layout/Footer';
import { makeStyles } from '@material-ui/core/styles';

import Hero from '../components/sections/Hero'
import ServicesOffered from '../components/sections/ServicesOffered'
import RecentProjects from '../components/sections/RecentProjects'
import Projects from '../components/sections/Projects'
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

      // resume
      const resume = await fetchContent({
        type: 'resume'
      })

      // hero
      const hero = await fetchContent({
        type: 'homeHero'
      })

      // about
      const about = await fetchContent({
        type: 'about',
        order: ''
      })

      // services offered
      let servicesOffered = []
      await fetchContent({
        type: 'serviceOffered',
        order: ''
      }).then(res => {
        res.map( service => {
          servicesOffered.push(service.fields)
        })
      })

      // recent projects
      let projects = []
      await fetchContent({
        type: 'recentProject', 
        order: '-fields.orderingDate'
      }).then(res => {
        res.map( project => {
          projects.push(project.fields)
        })
      })

      // thank you 
      const thankYou = await fetchContent({
        type: 'thankYou',
        order: ''
      })

      const recentProjects = projects.slice(0, 1)
      const otherProjects = projects.slice(1, projects.length)

      setPosts({
        resume: resume[0].fields.english["en-US"].fields.file["en-US"].url,
        shokumukeireki: resume[0].fields.shokumukeireki["en-US"].fields.file["en-US"].url,
        hero: hero[0].fields,
        about: about[0].fields,
        servicesOffered: servicesOffered,
        recentProjects: recentProjects,
        otherProjects: otherProjects,
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
            <Hero 
              resumeLink={contentfulData.resume}
              image={contentfulData.hero.image["en-US"].fields}
              heading={contentfulData.hero.heading["en-US"]}
              description={contentfulData.hero.description["en-US"].content}
            />
            <ServicesOffered services={contentfulData.servicesOffered}/>
            <RecentProjects projects={contentfulData.recentProjects}/>
            <Projects projects={contentfulData.otherProjects} title="Other Projects"/>
            <ThankYou content={contentfulData.thankYou} />
          </Layout>
        </>
      : null}
    </div>
    
  )
}

export default IndexPage;