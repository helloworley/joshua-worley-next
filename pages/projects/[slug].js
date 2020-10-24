import { useEffect, useState } from 'react'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import fetchContent from '../../contentful/fetchContent'
import ProjectPost from '../../components/ProjectPost'


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
  console.log('props', props)

  useEffect(() => {
    async function getPosts() {
      // recent projects
      const slug = props.slug
      const project = await fetchContent({
        type: 'recentProject',
        slug: slug
      })

      setContentfulData({
        project: project
      })
    }
    getPosts()
  }, [])

  console.log('props', props)

  return (
    <div id="projects">
      { contentfulDataCheck ? 
          <Layout>
            <div className="section-wrapper">
              <ProjectPost
                brand={contentfulData.project[0].fields.brand["en-US"]}
                brandAbout={contentfulData.project[0].fields.brandAbout["en-US"].content}
                date={contentfulData.project[0].fields.date["en-US"]}
                finalThoughts={contentfulData.project[0].fields.finalThoughts["en-US"].content}
                heroImage={contentfulData.project[0].fields.heroImage["en-US"]}
                logo={contentfulData.project[0].fields.logo["en-US"]}
                projectIntro={contentfulData.project[0].fields.projectIntro["en-US"].content}
                projectTitle={contentfulData.project[0].fields.projectTitle["en-US"]}
                projectType={contentfulData.project[0].fields.projectType["en-US"]}
                sections={contentfulData.project[0].fields.sections["en-US"]}
              />
            </div>
        </Layout>
      : null}
    </div>
  )
}

Page.getInitialProps = async function (context) {
  return context.query
}

export default Page;