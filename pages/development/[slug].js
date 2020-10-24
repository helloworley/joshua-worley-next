import { makeStyles } from '@material-ui/styles';
import Layout from '../../components/layout/MyLayout';
import '../../style/style.scss';
import fetch from 'isomorphic-unfetch';
import { Grid } from '@material-ui/core/';
import BackToExamples from '../../components/BackToExamples';
import Footer from '../../components/layout/Footer';

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
  devExample: {
    padding: '20px 0 0',
  }
}));


const devExample = props => {
  const devExample = props.devExample.website;
  const classes = useStyles();
  return (
    <div>
      <Layout>
        <div className={classes.centeredWrapper}>
          <Grid spacing={4} container justify="center">
            <Grid item xs={12}>

            <div id="development-example" className={classes.devExample}>
              <h1>{devExample.post_title} <span className={classes.exampleDate}>{devExample.post_date_formatted}</span></h1>
              <div className="wp-content">
                <div dangerouslySetInnerHTML={{ __html: devExample.post_content }}></div>
                <BackToExamples
                  link="/development"
                  text="More Development Projects"
                />
              </div>
            </div>



            </Grid>
          </Grid>
        </div>
      </Layout>
      <Footer />

    </div>

  )
};

devExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/websites/${slug}`);
  const devExample = await res.json();

  return { devExample };
};

export default devExample;