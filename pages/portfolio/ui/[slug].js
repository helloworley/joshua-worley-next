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


const uiExample = props => {
  const uiExample = props.uiExample.ui;
  const classes = useStyles();
  return (
    <Layout>
      <div id="ui-example">
        <h1>{uiExample.post_title} <span className={classes.exampleDate}>{uiExample.post_date_formatted}</span></h1>
        <div className="wp-content">
          <div dangerouslySetInnerHTML={{ __html: uiExample.post_content }}></div>
        </div>
      </div>
    </Layout>

  )
};

uiExample.getInitialProps = async function (context) {
  const { slug } = context.query;
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/ui/${slug}`);
  const uiExample = await res.json();

  return { uiExample };
};

export default uiExample;