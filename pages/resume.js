import '../style/style.scss'
import fetch from 'isomorphic-unfetch';
import Layout from '../components/MyLayout';

const Page = props => {
  return (
    <div id="resume">
      <Layout>
        <h1>{props.wpData.title.rendered}</h1>
        <h2>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>
        <div dangerouslySetInnerHTML={{ __html: props.wpData.content.rendered }} />
      </Layout>
    </div>

  );
}

Page.getInitialProps = async function (context) {
  const res = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/6`);
  const wpData = await res.json();

  console.log(wpData);

  return { wpData };
};

export default Page;
