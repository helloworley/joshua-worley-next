import Layout from '../components/MyLayout';
import '../style/style.scss'

const Page = props => {
  return (
    <Layout>
      <h1>{props.wpData.title.rendered}</h1>
      <h2>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>
      <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />
    </Layout>
  );
}

Page.getInitialProps = async function(context) {
  const res = await fetch(`https://wp.joshuaworley.com/wp-json/wp/v2/pages/5`);
  const wpData = await res.json();

  console.log(wpData);

  return { wpData };
};

export default Page;
