
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ContentfulToHTML from '../../helpers/ContentfulToHTML'

const useStyles = makeStyles(theme => ({
  servicesOffered: {
    minHeight: '400px',
    padding: theme.padding.xs,
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.padding.md
    },
    infoWrapper: {
      maxWidth: '800px',
      margin: '0 auto',
      marginTop: '30px',
      [theme.breakpoints.up('md')]: {
        marginTop: '40px'
      },
    },
  },
}));

const ServicesOffered = props => {
  const classes = useStyles();
  return (
    <div className={classes.servicesOffered}>
      <div className="section-wrapper">
        <SectionHeading text="Services Offered" />
        <div className={classes.infoWrapper}>
          <ContentfulToHTML data={props.content} />
        </div>
      </div>
    </div>
  )
};

export default ServicesOffered;


