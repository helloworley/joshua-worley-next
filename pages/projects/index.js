import { useEffect, useState } from 'react'
import '../../style/style.scss'
import Layout from '../../components/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import About from '../../components/sections/About'
import client from '../../contentful/client'
import fetchContent from  '../../contentful/fetchContent'


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
  const [ contentfulData, setContentfulData ] = useState([])
  const contentfulDataCheck = Object.entries(contentfulData).length !== 0 

  useEffect(() => {
    async function getPosts() {

      // recent projects
      let projects = []
      await fetchContent('recentProject', '-fields.orderingDate').then(res => {
        res.map( project => {
          projects.push(project.fields)
        })
      })

      setContentfulData({
        projects: projects
      })
    }
    getPosts()
  }, [])

  console.log(contentfulData.projects)


  return (
    <div id="projects">
      { contentfulDataCheck ? 
        <>
          <Layout>
            <h1>Projects</h1>
            {/* <About
              imgSrc={contentfulData.about.image["en-US"].fields.file["en-US"].url}
              imageAbout=""
              content={contentfulData.about.introduction["en-US"].content}
              resumeLink={contentfulData.about.resume["en-US"].fields.file["en-US"].url}
              resumeAbout={contentfulData.about.resume["en-US"].fields.description["en-US"]}
            /> */}
          </Layout>
          
        </>
      : null}
    </div>
  )
}

export default Page;