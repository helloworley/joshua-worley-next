import { NextSeo } from 'next-seo'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import fetchContent from '../../contentful/fetchContent'
import ProjectPost from '../../components/ProjectPost'
// import Projects from '../../components/sections/Projects'


const Page = props => {
  
  return (
    <div id="projects">
      <NextSeo
        title={`Joshua Worley - ${props.brand}`}
        description={props.seoDescription}
      />
      <Layout>
        <div>
          <ProjectPost
            brand={props.brand}
            brandAbout={props.brandAbout}
            date={props.date}
            finalThoughts={props.finalThoughts}
            heroImage={props.heroImage}
            logo={props.logo}
            projectIntro={props.projectIntro}
            projectTitle={props.projectTitle}
            projectType={props.projectType}
            sections={props.sections}
            technologies={props.technologies}
            aboutImage={props.project.aboutImage ? props.project.aboutImage["en-US"] : null }
            aboutLink={props.project.aboutLink ? props.project.aboutLink["en-US"] : null }
            aboutLinkText={props.project.aboutLinkText ? props.project.aboutLinkText["en-US"] : null }
          />
        </div>
        {/* <Projects projects={contentfulData.projects} title="More Projects" /> */}
      </Layout>
    </div>
  )
}

Page.getInitialProps = async (ctx) => {
  // page (project data)
  const project = await fetchContent({
    type: 'recentProject',
    slug: ctx.query.slug
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

  return {
    project: project,
    project: project[0].fields,
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
    technologies: project[0].fields.technologies["en-US"],
  }
}

export default Page;