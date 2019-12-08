import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import ContactForm from '../components/ContactForm';
import '../style/style.scss'

const Page = props => {
  const wpData = props.wpData;
  return (
    <Layout>
      <h1>{wpData.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
      <ContactForm />
    </Layout>
  );
}

Page.getInitialProps = async function () {
  const wpRes = await fetch(`https://jw.helloworley.com/wp-json/wp/v2/pages/24`);
  const wpData = await wpRes.json();

  return { wpData };
};

export default Page;