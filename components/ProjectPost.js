import { makeStyles } from '@material-ui/core/styles';
import RichTextToHTML from './RichTextToHTML'
import ButtonWrapped from './ButtonWrapped'
import { Grid } from '@material-ui/core/'


const useStyles = makeStyles(theme => ({
  projectPost: {
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
    marginBottom: '60px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '90px'
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
      marginBottom: '90px',
    },
  },
  projectHero: {
    width: '100%',
    marginBottom: '30px',
    height: '350px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeast',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    [theme.breakpoints.up('md')]: {
      marginBottom: '50px',
      height: '650px',
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
    letterSpacing: '3px',
    fontWeight: 'bold',
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    }
  },
  projectTitle: {
    fontSize: '16px',
    fontWeight: '400',
    letterSpacing: '1px',
    marginTop: '5px',
    marginBottom: '20px',
    fontWeight: 'bold',
    letterSpacing: '3px',
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
    [theme.breakpoints.up('md')]: {
      maxWidth: '1560px',
      padding: '0 80px',
    },
    margin: '0 auto'
  },
  singleColumn: {
    maxWidth: '960px',
    margin: '0 auto'
  },
  buttonWrapper: {
    margin: '30px 0 0',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial'
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
    marginTop: '60px',
    marginBottom: '60px',
    [theme.breakpoints.up('md')]: {
      marginBottom: '90px'
    }
  }
}));

const ProjectPost = props => {
  const classes = useStyles();
  const { brand, brandAbout, date, finalThoughts, heroImage, logo, projectIntro, projectTitle, projectType, sections } = props;

  return (
    <div className={classes.projectPost}>

      <div className={classes.projectHero} style={{
        backgroundImage: `url(${heroImage.fields.file["en-US"].url})`,
      }}></div>

      <div className={classes.projectSectionWrapper}>

        <h1 className="hide">{brand}</h1>

        <div className={`${classes.singleColumn} ${classes.brandProjectAbout}`}>
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
        </div>

        <div className={classes.projectSections}>
          {
            sections.map( section => {
              const img = section.fields.image["en-US"].fields
              const imgUrl = img.file["en-US"].url
              const imgAlt = img.title["en-US"]
              const description = section.fields.description["en-US"].content
              const title = section.fields.title["en-US"]
              console.log('project section', section)
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

        <div className={classes.singleColumn}>
          <RichTextToHTML data={finalThoughts} />
        </div>

      </div>
    </div>
  )
};

export default ProjectPost;


