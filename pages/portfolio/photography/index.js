import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import { Grid } from '@material-ui/core/';
import fetch from 'isomorphic-unfetch';

const Page = props => {
  const photographyProjects = props.photographyProjects;
  return (
    <Layout>
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <h1>Photography Projects</h1>
        </Grid>

        {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
        {photographyProjects.map((photographyProject) => {
          return (
            <Grid item xs={12} sm={6} lg={4} key={photographyProject.post_title}>
              <Link href="/portfolio/photography/[slug]" as={`/portfolio/photography/  b${photographyProject.slug}`}>
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
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/photography`);
  const wpData = await res.json();

  console.log(wpData);

  return {
    photographyProjects: wpData.map(entry => entry)
  };
};

export default Page;
