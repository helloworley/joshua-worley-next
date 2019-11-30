import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import '../style/style.scss'


const Page = props => {
  const wpData = props.wpData;
  return (
    <>
      <h1>{wpData.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: wpData.content.rendered }} />
    </>
  );
}



Page.getInitialProps = async function () {
  const res = await fetch('https://wp.joshuaworley.com/wp-json/wp/v2/pages/38');
  const wpData = await res.json();

  return { wpData };
};

export default Page;