import Layout from '../components/MyLayout';
import { Box } from 'rebass'
import '../style/style.scss'
import Fonts from '../style/fonts'


class Index extends React.Component {
  componentDidMount() {
    Fonts()
  }

  render(props) {
    return (
      <Layout>
        <h1>Joshua Worley</h1>
        <h2>Digital Producer. Leader. SEO Marker. Bilingual. Photographer. Videographer. UI/UX Designer and Frontend Engineer with a passion for experience creation.</h2>

        <ul>

        </ul>
      </Layout>
    )
  }
}



// Index.getInitialProps = async function () {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default Index;