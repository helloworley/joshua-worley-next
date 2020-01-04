import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import { Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import fetch from 'isomorphic-unfetch';

const useStyles = makeStyles({
  image: {
    width: '100%',
  },
});

const Page = props => {
  const wpData = props.wpData;
  const photographyProjects = props.photographyProjects;
  const classes = useStyles();
  return (
    <Layout>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h1 className={classes.image}>{wpData.title.rendered}</h1>
          <div className="portfolio-type-description" dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
        </Grid>

        {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
        {photographyProjects.map((photographyProject) => {
          return (
            <Grid item xs={12} sm={6} lg={4} className="project-snapshot" key={photographyProject.post_title}>
              <Link href="/portfolio/photography/[slug]" as={`/portfolio/photography/${photographyProject.slug}`}>
                <a>
                  <ImageCard
                    name={photographyProject.post_title}
                    excerpt={photographyProject.post_excerpt}
                    image={photographyProject.featured_image}
                    date={photographyProject.post_date_formatted}
                    id={photographyProject.id}
                  />
                </a>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/19`);
  const headlessRes = await fetch(`https://jw.helloworley.com/wp-json/headless/photography`);
  const wpData = await wpRes.json();
  const headlessData = await headlessRes.json();

  return {
    wpData: wpData,
    photographyProjects: headlessData.map(entry => entry)
  };
};

export default Page;
