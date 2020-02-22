import { makeStyles } from '@material-ui/styles';
import Layout from '../../components/MyLayout';
import HeroFull from '../../components/HeroFull';
import '../../style/style.scss';
import fetch from 'isomorphic-unfetch';
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles(theme => ({
  exampleDate: {
    fontSize: '.5em',
    fontWeight: '400',
    color: 'rgba(0,0,0,.5)',
    margin: '0 0 0 16px'  
  },
  centeredWrapper: {
    width: '100%',
    margin: '80px auto 80px',
    [theme.breakpoints.up('md')]: {
      maxWidth: '960px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1200px',
    },
  },
}));


const project = props => {
  const project = props.project.brand;
  const classes = useStyles();
  return (
    <Layout>
      <HeroFull
        title={project.post_title}
        excerpt={project.post_excerpt}
        date={project.post_date_formatted}
        image={project.featured_image}
      />
      <div className={classes.centeredWrapper}>
        <Grid spacing={4} container justify="center">
          <Grid item xs={12}>

          <div id="brand-example">
            <div className="wp-content">
              <div dangerouslySetInnerHTML={{ __html: project.post_content }}></div>
            </div>
          </div>

          </Grid>
        </Grid>
      </div>
    </Layout>

  )
};

project.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/brand/${slug}`);
  const project = await res.json();

  return { project };
};

export default project;