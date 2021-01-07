import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ProjectPost from '../ProjectPost'
import ImageCard from '../ImageCard'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  projects: {
    padding: theme.padding.xs,
    backgroundColor: theme.colors.gray1,
    [theme.breakpoints.up('sm')]: {
      padding: '120px 20px'
    },
    [theme.breakpoints.up('md')]: {
      padding: '120px 60px'
    },
    [theme.breakpoints.up('lg')]: {
      padding: '120px 30px'
    },
  },
  projectsInner: {
    maxWidth: '1560px',
    margin: '0 auto',
  },
  infoWrapper: {
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  image: {
    width: '100%'
  },
}));

const Projects = props => {
  const classes = useStyles();

  return (
    <div className={classes.projects}>
      <div className={classes.projectsInner}>
        <SectionHeading text={props.title} noBorder={true} />
        <Grid container spacing={6}>
          {
            props.projects.map( service => {
              console.log('service (project)', service)
              const brand = service.brand["en-US"]
              const slug = service.slug["en-US"]
              const brandAbout = service.brandAbout["en-US"].content
              const date = service.date["en-US"]
              const finalThoughts = service.finalThoughts["en-US"].content
              const heroImage = service.heroImage["en-US"]
              const logo = service.logo["en-US"]
              const projectIntro = service.projectIntro["en-US"].content
              const projectTitle = service.projectTitle["en-US"]
              // const projectType = service.projectType["en-US"]
              const sections = service.sections["en-US"]
              const tech = service.technologies["en-US"]
              return <Grid item xs={12} sm={6} lg={3} key={brand} className={classes.gridItem}>
                <ImageCard 
                  urlBase="/projects"
                  slug={slug}
                  brandAbout={brandAbout}
                  date={date}
                  finalThoughts={finalThoughts}
                  image={heroImage}
                  logo={logo}
                  projectIntro={projectIntro}
                  projectTitle={projectTitle}
                  // projectType={projectType}
                  sections={sections}
                  tech={tech}
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


