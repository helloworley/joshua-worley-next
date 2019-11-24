import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ImageCard from '../components/ImageCard'
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
        <Box
          sx={{
            display: 'grid',
            gridGap: 4,     // theme.space[3]
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >

          {/* {props.shows.map(show => (
            <Link href="/p/[id]" as={`/p/${show.id}`} key={show.id}>
              <ImageCard
                key={show.name}
                image={show.image.medium}
                name={show.name}
              />
            </Link>
          ))} */}
        </Box>

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