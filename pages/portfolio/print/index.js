import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles({
  imageCard: {
    width: '100%',
    backgroundColor: 'red',
  },
});

const Page = props => {
  const wpData = props.wpData;
  const printProjects = props.printProjects;
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={8}>
      <Grid item xs={12}>
        <h1 className={classes.image}>{wpData.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
      </Grid>
      {printProjects.map((printProject) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={printProject.post_title}>
            <span key={printProject.post_title}>
              <Link href="/portfolio/print/[slug]" as={`/portfolio/print/${printProject.slug}`}>
                <a>
                  <ImageCard
                    className={classes.imageCard}
                    name={printProject.post_title}
                    image={printProject.featured_image}
                    date={printProject.post_date_formatted}
                    excerpt={printProject.post_excerpt}
                    id={printProject.id}
                  />
                </a>
              </Link>
            </span>
          </Grid>
        );
      })}
      </Grid>
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/60`);
  const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/print`);
  const wpData = await wpRes.json();
  const headlessData = await headlessRes.json();

  console.log(wpData);

  return {
    wpData: wpData,
    printProjects: headlessData.map(entry => entry)
  };
};

export default Page;
