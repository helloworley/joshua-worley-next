import '../style/style.scss'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/layout/MyLayout';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  heading: {
    lineHeight: 1,
  },
  resumeSectionHeading: {
    fontSize: '1.8em !important',
    fontWeight: 600,
    // color: '#bababa',
    margin: '32px 0 64px !important',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  content: {
    margin: '0 0 64px',
    maxWidth: '800px',
  },
  keyImage: {
    maxWidth: '100%',
    margin: '0 0 40px',
  },
  profileWrapper: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'initial',
    }
  },
  date: {
    margin: '0 0 8px',
    color: theme.palette.primary.main,
    color: 'rgba(0,0,0,.4)',
    fontSize: '1em',
  },
  profile: {
    width: '100%',
    maxWidth: '100%',
    margin: '0 0 32px',
    [theme.breakpoints.up('sm')]: {
      width: 'initial',
      paddingRight: '16px',
      margin: '0',
    }
  }
}));

const Page = props => {
  const classes = useStyles();
  const pageData = props.wpData.post;
  return (
    <div id="the-meaning-of-life" class="post">
      <Layout>

        <div className={classes.content}>
          <img src={pageData.featured_image} className={classes.keyImage}/>
          <h1 className={classes.heading}>{pageData.post_title}</h1>
          <p className={classes.date}>{pageData.post_date_formatted}</p>
          <p>{props.wpData.date}</p>
          <div dangerouslySetInnerHTML={{ __html: pageData.post_content }} />
        </div>

      </Layout>
    </div>

  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/headless/post/the-meaning-of-life`);
  const wpData = await res.json();

  return { wpData };
};

export default Page;
