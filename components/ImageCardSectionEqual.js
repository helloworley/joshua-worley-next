import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ImageCard from './ImageCard';
import Link from 'next/link';
import { Typography } from '@material-ui/core/';


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
    <Grid spacing={2} container >
        
    {props.projects.map((project) => {
        return (
          <Grid item xs={12} sm={6} lg={4} className="project-snapshot" key={project.post_title}>
            <span key={project.post_title}>
                <a>
                  <ImageCard
                    className={classes.imageCard}
                    name={project.post_title}
                    brand={project.brand}
                    link={project.slug}
                    image={project.featured_image}
                    date={project.post_date_formatted}
                    excerpt={project.post_excerpt}
                    id={project.post_title}
                    urlBase={props.urlBase}
                  />
                </a>

            </span>
          </Grid>
        );
      })}
  
  </Grid>
  )
};

export default ImageCardSectionFocus;


