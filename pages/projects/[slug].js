import { useEffect, useState } from 'react'
import { NextSeo } from 'next-seo'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import fetchContent from '../../contentful/fetchContent'
import ProjectPost from '../../components/ProjectPost'
import Projects from '../../components/sections/Projects'


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
  const slug = props.slug

  useEffect(() => {
    async function getPosts() {

      // page (project data)
      const slug = props.slug
      const project = await fetchContent({
        type: 'recentProject',
        slug: slug
      })

      // recent projects
      // let projects = []
      // await fetchContent({
      //   type: 'recentProject', 
      //   order: '-fields.orderingDate'
      // }).then(res => {
      //   res.map( project => {
      //     projects.push(project.fields)
      //   })
      // })
      // const filteredProjects = projects.filter( project => project.slug["en-US"] !== slug);
      

      setContentfulData({
        project: project,
        brand: project[0].fields.brand["en-US"],
        seoDescription: project[0].fields.seoDescription["en-US"],
        brandAbout: project[0].fields.brandAbout["en-US"].content,
        date: project[0].fields.date["en-US"],
        finalThoughts: project[0].fields.finalThoughts["en-US"].content,
        heroImage: project[0].fields.heroImage["en-US"],
        logo: project[0].fields.logo["en-US"],
        projectIntro: project[0].fields.projectIntro["en-US"].content,
        projectTitle: project[0].fields.projectTitle["en-US"],
        projectType: project[0].fields.projectType["en-US"],
        sections: project[0].fields.sections["en-US"],
        // projects: filteredProjects
      })
    }
    getPosts()
  }, [])

  console.log('props', props)
  console.log('contentfulData', contentfulData)

  return (
    <>
      { contentfulDataCheck ? 
        <div id="projects">
          <NextSeo
            title={`Joshua Worley - ${contentfulData.brand}`}
            description={contentfulData.seoDescription}
          />
          <Layout>
            <div>
              <ProjectPost
                brand={contentfulData.brand}
                brandAbout={contentfulData.brandAbout}
                date={contentfulData.date}
                finalThoughts={contentfulData.finalThoughts}
                heroImage={contentfulData.heroImage}
                logo={contentfulData.logo}
                projectIntro={contentfulData.projectIntro}
                projectTitle={contentfulData.projectTitle}
                projectType={contentfulData.projectType}
                sections={contentfulData.sections}
              />
            </div>
            {/* <Projects projects={contentfulData.projects} title="More Projects" /> */}
          </Layout>
        </div>
      : null}
    </>
  )
}

Page.getInitialProps = async function (context) {
  return context.query
}

export default Page;