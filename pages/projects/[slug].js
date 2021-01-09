import { NextSeo } from 'next-seo'
import '../../style/style.scss'
import Layout from '../../components/layout/MyLayout';
import fetchContent from '../../contentful/fetchContent'
import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from '../../components/RichTextToHTML'
import ButtonWrapped from '../../components/ButtonWrapped'
import { Grid } from '@material-ui/core/'


const technologiesUsed = (classes, technologies) => {
  return (
    <>
       {
        technologies.map( tech => {
          // console.log('tech', tech)
          const image = tech.fields.image["en-US"].fields.file["en-US"].url
          const text = tech.fields.name["en-US"]
          const link = tech.fields.link["en-US"]
          return (
            <a key={link} href={link} target="_blank">
              <div className={classes.tech}>
                <img className={classes.techImage} src={image} />
                <h5>{text}</h5>
              </div>
            </a>
          )
        })
      }
    </>
  )
}

const displaySections = (classes, sections) => {
  return (
    <div className={classes.projectSections}>
      {
        sections.map( section => {
          const img = section.fields.image["en-US"].fields
          const imgUrl = img.file["en-US"].url
          const imgAlt = img.title["en-US"]
          const description = section.fields.description["en-US"].content
          const title = section.fields.title["en-US"]
          let link
          let linkText
          {
            if (section.fields.link) {
              link = section.fields.link["en-US"]
              linkText = section.fields.linkText["en-US"]
            }
          }
          
          return (
            <div className={classes.projectSection} key={imgUrl}>
              <Grid container spacing={0}>
                <Grid item xs={12} md={6} lg={7}>
                  <img src={imgUrl} alt={imgAlt} className={classes.projectImgExample} />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <div className={classes.projectSectionDesc}>
                    <h4 className={classes.sectionTitle}>{title}</h4>
                    <RichTextToHTML data={description} />
                    {
                      link ?
                        <div className={classes.buttonWrapper}>
                          <ButtonWrapped link={link} text={linkText} />
                        </div>
                      : null
                    }
                  </div>
                  
                </Grid>
              </Grid>
            </div>
          )
        })
      }
    </div>
  )
}

const displayContent = (classes, content) => {
  return (
    <div className={classes.content}>
      <div className={classes.singleColumn}>
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
  const { brand, brandAbout, date, finalThoughts, heroImage, logo, projectIntro, projectTitle, projectType, technologies, sections, aboutImage, links } = props;

  return (
    <div id="projects">
      <NextSeo
        title={`Joshua Worley - ${props.brand}`}
        description={props.seoDescription}
      />
      <Layout>
        <div>
           <div className={classes.projectSectionWrapper}>

            <div className={classes.singleColumn}>

              <div className={classes.brandAbout}>
                <img className={classes.logo} src={logo.fields.file["en-US"].url} alt={logo.fields.title["en-US"]} />
                <RichTextToHTML data={brandAbout} />
              </div>
              <img className={classes.projectHero} src={heroImage.fields.file["en-US"].url} />
            
              { links ?  displayLinks(classes, links) : null}
              
              <div className={classes.brandProjectAbout}>
                
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
                  { aboutImage ? <div className={classes.aboutImageWrapper}><img src={aboutImage.fields.file["en-US"].url} /></div> : null }
                </div>

              </div>

              { content ? displayContent(classes, content) : displaySections(classes, sections)}

              <div className={classes.singleColumn}>
                <RichTextToHTML data={finalThoughts} />
              </div>

            </div>
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
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  date: {
    
  },
  image: {
    width: '100%'
  },
  brandAbout: {
    textAlign: 'center',
    maxWidth: '660px',
    margin: '0 auto 60px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '80px'
    }
  },
  projectImgExample: {
    width: '100%',
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '40px',
      marginBottom: '0',
    },
  },
  projectSectionDesc: {
    '& p': {
      [theme.breakpoints.up('md')]: {
        marginTop: '0px'
      }
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: '40px',
    },
  },
  projectSection: {
    marginBottom: '90px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '120px',
    },
  },
  projectHero: {
    width: '100%',
    marginBottom: '30px',
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
  projectSectionWrapper: {
    padding: theme.padding.xs,
    backgroundColor: '#fafafa',
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: '80px',
    },
    margin: '0 auto'
  },
  singleColumn: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  aboutImageWrapper: {
    margin: '30px 0 0',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial'
    },
    '& img': {
      maxWidth: '100%',
    }
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
  tech: {
    display: 'inline-block',
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
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
    [theme.breakpoints.up('md')]: {
      marginLeft: '10px',
      textAlign: 'initial',
      justifyContent: 'flex-end',
      marginBottom: '0',
    }
  },
  aboutButtons: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '30px',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    }
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
    finalThoughts: project[0].fields.finalThoughts ? project[0].fields.finalThoughts["en-US"].content : null,
    heroImage: project[0].fields.heroImage["en-US"],
    logo: project[0].fields.logo["en-US"],
    links: project[0].fields.links ? project[0].fields.links['en-US'] : null,
    projectIntro: project[0].fields.projectIntro["en-US"].content,
    projectTitle: project[0].fields.projectTitle["en-US"],
    sections: project[0].fields.sections["en-US"],
    content: project[0].fields.content ? project[0].fields.content["en-US"] : null,
    technologies: project[0].fields.technologies["en-US"],
  }
}

export default Page;