import { NextSeo } from 'next-seo';
import '../style/style.scss';
import Layout from '../components/layout/MyLayout';

import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import fetchContent from '../contentful/fetchContent';
import TechExp from '../components/sections/TechExp';
import Testimonials from '../components/sections/Testimonials';
import ContactSection from '../components/sections/ContactSection';

const IndexPage = props => {
  const {seoTitle, seoDescription, seoImage, resume, hero, techExp, projects, testimonials, contact } = props;
  console.log('contact', contact);
  return (
    <div id="home">
      <>
        <NextSeo
          title={props.seoTitle}
          description={props.seoDescription}
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: 'https://joshworley.io/',
            site_name: 'Josh Worley Portfolio',
            title: props.seoTitle,
            description: props.seoDescription,
            images: [
              {
                url: props.seoImage,
                width: 800,
                height: 600,
                alt: 'Og Image Alt',
              }
            ],
          }}
        />
        <Layout>
          <Hero 
            resumeLink={props.resume}
            image={props.hero.image["en-US"].fields}
            imageTextBackground={props.hero.imageTextBackground["en-US"].fields}
            heading={props.hero.heading["en-US"]}
            description={props.hero.description["en-US"].content}
          />
          <TechExp technologies={props.techExp}/>
          <Projects projects={props.projects} title="Recent Projects"/>
          <Testimonials testimonials={props.testimonials} />
          {/* <ServicesOffered services={props.servicesOffered}/> */}
          {/* <FeaturedProject project={props.highlightedProject} /> */}
          <ContactSection contact={contact} />
          {/* <ThankYou content={props.thankYou} /> */}
        </Layout>
      </>
    </div>
  )
}


// for Server Side Rendering, we do the API call here instead of in the page component
IndexPage.getInitialProps = async (ctx) => {
  // home 
  const pageHome = await fetchContent({
    type: 'pageHome'
  })
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
    type: 'about'
  })
  // testimonials
  const testimonials = await fetchContent({
    type: 'testimonial',
    order: 'fields.order'
  })
  // resume
  const contact = await fetchContent({
    type: 'contact'
  })
  // highlighted project
  const highlightedProject = await fetchContent({
    type: 'highlightedProject',
    order: ''
  })
  // tech exp
  let techExp = [];
  await fetchContent({
    type: 'technology',
    order: 'fields.name'
  }).then(res => {
    res.map( tech => {
      techExp.push(tech.fields)
    })
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
  // projects
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
  return { 
    seoTitle: pageHome[0].fields.seoTitle["en-US"],
    seoDescription: pageHome[0].fields.seoDescription["en-US"],
    seoImage: pageHome[0].fields.seoImage["en-US"].fields.file["en-US"].url,
    resume: resume[0].fields.english["en-US"].fields.file["en-US"].url,
    shokumukeireki: resume[0].fields.shokumukeireki["en-US"].fields.file["en-US"].url,
    hero: hero[0].fields,
    contact: contact[0].fields,
    about: about[0].fields,
    servicesOffered: servicesOffered,
    projects: projects,
    thankYou: thankYou[0].fields,
    techExp: techExp,
    highlightedProject: highlightedProject,
    testimonials: testimonials
  }
}


export default IndexPage;