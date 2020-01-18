import { withStyles } from '@material-ui/styles';
import { Grid, Button, FormControl, InputLabel, Input, FormHelperText} from '@material-ui/core/';


import { Carousel } from 'react-responsive-carousel';
import FullCard from './FullCard';


const styles = theme => ({
  root: {
    margin: '40px 0 0'
  },
  excerpt: {
      maxWidth: '600px',
      margin: '16px auto 56px'
  },
});


class IllustrationsCarousel extends React.Component {

  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.state = {
      open: true, 
    }
  }

  render() {
    const { classes } = this.props;

    return (
        <Carousel
            // centerMode="true"
            showThumbs={false}
        >


            {this.props.examples.map((illustrationProject) => {
                    return (
                        <div
                            key={illustrationProject.image}
                            className={classes.example}
                        >
                            <img className={classes.image} src={illustrationProject.featured_image} />
                            <h4>{illustrationProject.post_title}</h4>
                            <small>{illustrationProject.post_date_formatted}</small>
                            <p className={classes.excerpt}>{illustrationProject.post_excerpt}</p>
                        </div>
                    );
                })}

        </Carousel>
    );
  }
}


export default withStyles(styles)(IllustrationsCarousel);