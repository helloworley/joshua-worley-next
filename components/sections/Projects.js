import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ProjectPost from '../ProjectPost'
import ImageCard from '../ImageCard'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  projects: {
    padding: theme.padding.xs,
    backgroundColor: theme.colors.sand,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.padding.md
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
  image: {
    width: '100%'
  }
}));

const Projects = props => {
  const classes = useStyles();

  return (
    <div className={classes.projects}>
      <div className="section-wrapper">
        <SectionHeading text={props.title} />
        <Grid container spacing={4}>
          {
            props.projects.map( service => {
              // console.log('service', service)
              const brand = service.brand["en-US"]
              const slug = service.slug["en-US"]
              const brandAbout = service.brandAbout["en-US"].content
              const date = service.date["en-US"]
              const finalThoughts = service.finalThoughts["en-US"].content
              const heroImage = service.heroImage["en-US"]
              const logo = service.logo["en-US"]
              const projectIntro = service.projectIntro["en-US"].content
              const projectTitle = service.projectTitle["en-US"]
              const projectType = service.projectType["en-US"]
              const sections = service.sections["en-US"]
              return <Grid item xs={12} md={4} key={brand}>
                <ImageCard 
                  urlBase="projects"
                  slug={slug}
                  brandAbout={brandAbout}
                  date={date}
                  finalThoughts={finalThoughts}
                  image={heroImage}
                  logo={logo}
                  projectIntro={projectIntro}
                  projectTitle={projectTitle}
                  projectType={projectType}
                  sections={sections}
                />
              </Grid>
            })
          }
          
        </Grid>
      </div>
    </div>
  )
};

export default Projects;


