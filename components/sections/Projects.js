import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ProjectPost from '../ProjectPost'
import ImageCard from '../ImageCard'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  projects: {
    maxWidth: '1560px',
    margin: '0 auto',
    padding: theme.padding.xs,
    borderTop: `solid 1px ${theme.colors.line}`,
    // backgroundColor: theme.colors.sand,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: '120px 0'
    },
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
  // gridItem: {
  //   paddingRight: '40px',
  //   '&:nth-of-type(1)': {
  //     paddingLeft: '10px'
  //   },
  //   '&:nth-of-type(4)': {
  //     paddingRight: '10px',
  //   }
  // }
}));

const Projects = props => {
  const classes = useStyles();

  return (
    <div className={classes.projects}>
      <SectionHeading text={props.title} noBorder={true} />
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
            return <Grid item xs={12} sm={6} md={3} key={brand} className={classes.gridItem}>
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
                projectType={projectType}
                sections={sections}
              />
            </Grid>
          })
        }
        
      </Grid>
    </div>
  )
};

export default Projects;


