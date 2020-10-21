import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from './RichTextToHTML'
import ButtonWrapped from './ButtonWrapped'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  projectPost: {
    marginBottom: '80px',
    paddingBottom: '80px',
    borderBottom: `solid 1px ${theme.colors.line}`,
    '&:last-of-type': {
      borderBottom: 'none',
    }
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
    marginBottom: '50px'
  },
  projectImgExample: {
    width: '100%',
    marginBottom: '20px',
    [theme.breakpoints.up('md')]: {
      paddingRight: '20px',
    },
  },
  projectSectionDesc: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: '20px',
    },
  },
  projectSection: {
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '80px',
    },
  },
  projectHero: {
    width: '100%',
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '50px',
    },
  },
  logo: {
    maxHeight: '70px',
    [theme.breakpoints.up('md')]: {
      maxHeight: '100px',
    },
  },
  projectMeta: {
    color: theme.colors.meta,
    fontSize: '10px',
    margin: '0',
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: '5px',
    marginBottom: '20px',
  },
  projectAbout: {
    marginBottom: '50px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '80px',
    },
  }
}));

const ProjectPost = props => {
  const classes = useStyles();
  const { brand, brandAbout, date, finalThoughts, heroImage, logo, projectIntro, projectTitle, projectType, sections } = props;
  console.log('final thoughts', finalThoughts)

  return (
    <div className={classes.projectPost}>

      <img className={classes.projectHero} src={heroImage.fields.file["en-US"].url} alt={heroImage.fields.title["en-US"]} />
      <h1 className="hide">{brand}</h1>

      <div className={classes.brandAbout}>
        <img className={classes.logo} src={logo.fields.file["en-US"].url} alt={logo.fields.title["en-US"]} />
        <RichTextToHTML data={brandAbout} />
      </div>

      <div className={classes.projectAbout}>
        <h4 className={classes.projectMeta}>{projectType}</h4>
        <h4 className={classes.projectMeta}>{date}</h4>
        <h2 className={classes.projectTitle}>{projectTitle}</h2>
        <RichTextToHTML data={projectIntro} />
      </div>

      <div className={classes.projectSections}>
        {
          sections.map( section => {
            console.log('sectionxxxxxxxxx', section)
            const img = section.fields.image["en-US"].fields
            const imgUrl = img.file["en-US"].url
            const imgAlt = img.title["en-US"]
            const description = section.fields.description["en-US"].content
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
                  <Grid item xs={12} md={6}>
                    <img src={imgUrl} alt={imgAlt} className={classes.projectImgExample} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <div className={classes.projectSectionDesc}>
                      <RichTextToHTML data={description} />
                      {
                        link ? <a href={link} target="_blank">{linkText}</a> : null
                      }
                    </div>
                    
                  </Grid>
                </Grid>
              </div>
            )
          })
        }
      </div>

      <RichTextToHTML data={finalThoughts} />
      
    </div>
  )
};

export default ProjectPost;


