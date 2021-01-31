import { NextSeo } from 'next-seo'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import fetchContent from '../../contentful/fetchContent'
import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from '../../components/RichTextToHTML'
import ButtonWrapped from '../../components/ButtonWrapped'
import { Grid } from '@material-ui/core/'
import { Tech }  from '../../components/Tech';


const technologiesUsed = (classes, technologies) => {
  return (
    <ul className={classes.techUsedWrapper}>
       {
        technologies.map( tech => {
          const image = tech.fields.image["en-US"].fields.file["en-US"].url
          const text = tech.fields.name["en-US"]
          const link = tech.fields.link["en-US"]
          return <Tech key={link} image={image} link={link} text={text} />
        })
      }
    </ul>
  )
}

const displayContent = (classes, content) => {
  return (
    <div className={classes.content}>
      <div className={classes.main}>
        <RichTextToHTML data={content} />
      </div>
    </div>
  )
}

const displayLinks = (classes, buttons) => {
  return (
    <div className={classes.aboutButtons}>
      {buttons.map( button => {
        const link = button.fields.link['en-US'];
        const text = button.fields.text['en-US'];
        return (
          <div className={classes.buttonWrapper}>
            <ButtonWrapped text={text} link={link} />
          </div> 
        )
      })}
    </div>
  )
}


const Page = props => {
  const classes = useStyles();
  const content = props.content ? props.content.content : null;
  const { brand, brandAbout, date, heroImage, logo, projectIntro, projectTitle, projectType, technologies, aboutImage, links, seoDescription } = props;
  const logoURL = logo.fields.file["en-US"].url;
  const logoAlt = logo.fields.title["en-US"];
  const heroURL = heroImage.fields.file["en-US"].url;
  return (
    <div id="projects">
      <NextSeo
        title={`Joshua Worley - ${brand}`}
        description={props}
      />
      <Layout>
        <div className={classes.projectSectionWrapper}>
           <div className={classes.projectSectionWrapperInner}>

            <aside className={classes.asideFrame}>
              <div className={classes.aside}>
                <div className={classes.asideInner}>
                  <div className={classes.brandAbout}>
                    <img className={classes.logo} src={logoURL} alt={logoAlt} />
                    <RichTextToHTML data={brandAbout} />
                  </div>
                  { links ?  displayLinks(classes, links) : null}
                </div>
              </div>
            </aside>

            <main className={classes.main}>  
              <div className={classes.brandProjectAbout}>
                <img className={classes.projectHero} src={heroURL} />
                <div className={classes.projectAbout}>
                  <div className={classes.projectMainInfo}>
                    <h2 className={classes.projectTitle}>{projectTitle}</h2>
                    <h4 className={classes.date}>{date}</h4>
                  </div>
                  <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <h3 className={classes.projectMeta}>Project About</h3>
                        <RichTextToHTML data={projectIntro} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <div className={classes.technologiesSec}>
                        <h3 className={`${classes.projectMeta} ${classes.techUsed}`}>Technologies Used</h3>
                        {technologiesUsed(classes, technologies)}
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
              { displayContent(classes, content) }
            </main>
          </div>
          </div>
        
        {/* <Projects projects={contentfulData.projects} title="More Projects" /> */}
      </Layout>
    </div>
  )
}


const useStyles = makeStyles(theme => ({
  projectPost: {
    padding: '80px 0',
    borderBottom: `solid 1px ${theme.colors.line}`,
    '&:last-of-type': {
      borderBottom: 'none',
    },
  },
  projectSectionWrapper: {
    backgroundColor: '#fafafa',
  },
  projectSectionWrapperInner: {
    padding: theme.padding.xs,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      // padding: '80px',
      display: 'grid',
      gridTemplateColumns: '.3fr .7fr',
    },
    [theme.breakpoints.up('lg')]: {
      gridTemplateColumns: '.25fr .75fr',
      maxWidth: 1800
    },
    margin: '0 auto'
  },
  asideFrame: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '40px',
      
    },
  },
  aside: {
    marginBottom: 100,
    [theme.breakpoints.up('md')]: {
      position: 'fixed',
      width: '100%'
    },
  },
  asideInner: {
    [theme.breakpoints.up('md')]: {
      paddingRight: '5%',
      width: '25%',
    },
    [theme.breakpoints.up('xl')]: {
      width: '23%'
    }
  },
  main: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  image: {
    width: '100%'
  },
  brandAbout: {
    [theme.breakpoints.up('md')]: {
      marginBottom: '30px'
    }
  },
  projectHero: {
    marginBottom: '30px',
    maxWidth: '100%',
  },
  logo: {
    maxHeight: '70px',
    maxWidth: '130px',
    margin: '0 0 16px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '100px',
      maxWidth: '200px',
      maxHeight: '70px',
    },
  },
  tech: {
    marginRight: '30px',
    textAlign: 'center',
    '&:hover': {
      opacity: '.8'
    },
    '& img': {
      height: '50px',
      width: '50px',
    },
    '& h5': {
      marginTop: '10px',
      textAlign: 'center',
      color: theme.colors.abyss
    },
    [theme.breakpoints.up('md')]: {
      '& img': {
        maxHeight: '80px',
      },
    }
  },
  projectMainInfo: {
    marginBottom: '40px',
  },
  projectMeta: {
    color: theme.colors.meta,
    textTransform: 'uppercase',
    fontSize: '10px',
    margin: '0 0 20px',
    letterSpacing: '2px',
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    }
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '400',
    marginTop: '5px',
    marginBottom: '20px',
    fontWeight: 'normal',
    fontSize: '22px',
    [theme.breakpoints.up('md')]: {
      fontSize: '36px',
    }
  },
  projectAbout: {
    marginBottom: '50px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '80px',
    },
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '18px',
    letterSpacing: '3px',
    marginBottom: '10px',
    marginTop: '0'
  },
  brandProjectAbout: {
    marginBottom: '60px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '90px'
    }
  },
  techUsed: {
    marginBottom: '20px'
  },
  technologiesSec: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '60px',
    }
  },
  buttonWrapper: {
    textAlign: 'center',
    marginBottom: '10px',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    }
  },
  aboutButtons: {
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '30px',
    }
  },
  techUsedWrapper: {
    paddingLeft: 0,
    maxWidth: 240
  },
}));



Page.getInitialProps = async (ctx) => {
  // page (project data)
  const project = await fetchContent({
    type: 'recentProject',
    slug: ctx.query.slug
  })

  return {
    project: project[0].fields,
    brand: project[0].fields.brand["en-US"],
    seoDescription: project[0].fields.seoDescription["en-US"],
    brandAbout: project[0].fields.brandAbout["en-US"].content,
    date: project[0].fields.date["en-US"],
    heroImage: project[0].fields.heroImage["en-US"],
    logo: project[0].fields.logo["en-US"],
    links: project[0].fields.links ? project[0].fields.links['en-US'] : null,
    projectIntro: project[0].fields.projectIntro["en-US"].content,
    projectTitle: project[0].fields.projectTitle["en-US"],
    content: project[0].fields.content ? project[0].fields.content["en-US"] : null,
    technologies: project[0].fields.technologies["en-US"],
  }
}

export default Page;