import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ImageCard from './ImageCard';
import ImageCardLarge from './ImageCardLarge';
import { Typography } from '@material-ui/core/';
import Link from 'next/link';


const useStyles = makeStyles(theme => ({
  card: {
    margin: '0 0 24px',
    boxShadow: '0 10px 16px 0 rgba(205, 217, 231, 0.47)',
    cursor: 'pointer'
  },
  image: {
    height: 240,
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    margin: '0',
  },
  cardDetails: {
    padding: '5% 8%',
    position: 'relative',
    height: '108px',
  },
  heading: {
    margin: '0',
    color: theme.palette.primary.main,
    fontSize: '1.1em',
  },
  brand: {
    margin: '0 0 10px',
    fontSize: '.8em',
  },
  date: {
    position: 'absolute',
    right: '8%',
    top: '20%',
    color: theme.palette.primary.main,
    color: 'rgba(0,0,0,.4)',
    fontSize: '.8em',
  },
  excerpt: {
    color: 'rgba(0,0,0,.4)',
    fontSize: '.8em',
  }

}));

const ImageCardSectionFocus = props => {
  const classes = useStyles();
  return (
    <Grid spacing={2} container justify="center">
        
      <Grid item xs={12} md={8}>
        <ImageCardLarge
          className={classes.imageCard}
          name={props.projects[0].post_title}
          brand={props.projects[0].brand}
          link={props.projects[0].slug}
          image={props.projects[0].featured_image}
          date={props.projects[0].post_date_formatted}
          excerpt={props.projects[0].post_excerpt}
          id={props.projects[0].post_title}
          urlBase={props.urlBase}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Grid container>
          <Grid item xs={12} sm={6} md={12}>

            {
              props.projects[1] &&
              <ImageCard
                className={classes.imageCard}
                name={props.projects[1].post_title}
                brand={props.projects[1].brand}
                link={props.projects[1].slug}
                image={props.projects[1].featured_image}
                date={props.projects[1].post_date_formatted}
                excerpt={props.projects[1].post_excerpt}
                id={props.projects[1].post_title}
                urlBase={props.urlBase}
              />
            }

          </Grid>
          <Grid item xs={12} sm={6} md={12}>

          {
              props.projects[2] &&
              <ImageCard
                className={classes.imageCard}
                name={props.projects[2].post_title}
                brand={props.projects[2].brand}
                link={props.projects[2].slug}
                image={props.projects[2].featured_image}
                date={props.projects[2].post_date_formatted}
                excerpt={props.projects[2].post_excerpt}
                id={props.projects[2].post_title}
                urlBase={props.urlBase}
              />
          }
            
          </Grid>
        </Grid>
      
      </Grid>
  {/* {uiProjects.map((uiProject) => {
    return (
      <Grid item xs={12} sm={6} lg={4} className="project-snapshot" key={uiProject.post_title}>
        <span key={uiProject.post_title}>
          <Link href="/portfolio/ui/[slug]" as={`/portfolio/ui/${uiProject.slug}`}>
            <a>
              <ImageCard
                className={classes.imageCard}
                name={uiProject.post_title}
                image={uiProject.featured_image}
                date={uiProject.post_date_formatted}
                excerpt={uiProject.post_excerpt}
                id={uiProject.id}
              />
            </a>
          </Link>
        </span>
      </Grid>
    );
  })} */}
  </Grid>
  )
};

export default ImageCardSectionFocus;


