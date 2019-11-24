import Layout from '../../../components/MyLayout'
import '../../../style/style.scss'
import ImageCard from '../../../components/ImageCard';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Page = props => {
  const uiProjects = props.uiProjects;
  return (
    <Layout>
      <h1>UI Projects</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} /> */}
      {uiProjects.map((uiProject) => {
        return (
          <span key={uiProject.post_title}>
            <Link href="/portfolio/websites/[slug]" as={`/p/${uiProject.slug}`}>
              <ImageCard
                name={uiProject.post_title}
                image={uiProject.featured_image}
                date={uiProject.post_date_formatted}
                excerpt={uiProject.post_excerpt}
                id={uiProject.id}
              />
            </Link>
          </span>
        );
      })}
    </Layout>
  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/headless/ui`);
  const wpData = await res.json();

  console.log(wpData);

  return {
    uiProjects: wpData.map(entry => entry)
  };
};

export default Page;
