import { makeStyles } from '@material-ui/styles';
import Layout from '../../../components/MyLayout';
import '../../../style/style.scss';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles({
  exampleDate: {
    fontSize: '.5em',
    fontWeight: '400',
    color: 'rgba(0,0,0,.5)',
    margin: '0 0 0 16px'  
  }
});



const websiteExample = props => {
  const websiteExample = props.websiteExample.website;
  const classes = useStyles();
  return (
    <Layout>
      <div id="website-example">
        <h1>{websiteExample.post_title} <span className={classes.exampleDate}>{websiteExample.post_date_formatted}</span></h1>
        <div>
          <div dangerouslySetInnerHTML={{ __html: websiteExample.post_content }}></div>
        </div>
      </div>
    </Layout>

  )
};

websiteExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/websites/${slug}`);
  const websiteExample = await res.json();

  return { websiteExample };
};

export default websiteExample;