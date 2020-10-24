import { useEffect, useState } from 'react'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import fetchContent from '../../contentful/fetchContent'
import Projects from '../../components/sections/Projects'
import client from '../../contentful/client'


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
      const slug = 'namonai'
      const project = fetchContent('recentProject', '')

      setContentfulData({
        project: project
      })
    }
    getPosts()
  }, [])

  console.log('data', contentfulData)


  return (
    <div id="projects">
      { contentfulDataCheck ? 
        <>
          <Layout>
            test
          </Layout>
        </>
      : null}
    </div>
  )
}

export default Page;