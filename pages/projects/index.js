import { NextSeo } from 'next-seo'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import { makeStyles } from '@material-ui/core/styles';
import Projects from '../../components/sections/Projects'
import fetchContent from  '../../contentful/fetchContent'

const ProjectsPage = props => {
  return (
    <div id="projects">
      <NextSeo
        title={`Joshua Worley - ${props.seoTitle}`}
        description={props.seoDescription}
      />
      <Layout>
        <Projects projects={props.projects} title="Projects" />
      </Layout>
    </div>
  )
}

ProjectsPage.getInitialProps = async (ctx) => {
  // page 
  const pageProjects = await fetchContent({
    type: 'pageProjects'
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
  return { 
    seoTitle: pageProjects[0].fields.seoTitle["en-US"],
    seoDescription: pageProjects[0].fields.seoDescription["en-US"],
    projects: projects
  }
}


export default ProjectsPage;