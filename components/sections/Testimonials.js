import { makeStyles } from '@material-ui/core/styles'
import RichTextToHTML from '../RichTextToHTML'
import SectionHeading from '../layout/SectionHeading'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

const getTestimonial = (classes, testimonial) => {
  let { quote, name, avatar, position, company, link } = testimonial;
  quote = quote['en-US'].content;
  name = name['en-US'];
  avatar = avatar['en-US'].fields.file['en-US'].url;
  position = position['en-US'];
  company = company['en-US'];
  link = link && link['en-US'];

  console.log('position', position)
  return (
    <div className={classes.testimonial}>
      <FormatQuoteIcon className={classes.quote}/>
      <RichTextToHTML data={quote} />
      <img className={classes.avatar} src={avatar} />
      <p className={classes.personInfo}>{name}</p>
      <p className={classes.personInfo}>{position}</p>
      {
        link ? <a href={link} target="_blank"><p className={classes.personInfo}>{company}</p></a>
        : <p className={classes.personInfo}>{company}</p>
      }
    </div>
  )
}

const Testimonials = props => {
  const classes = useStyles();
  const { testimonials } = props;
  return (
    <div className={classes.testimonialsSection}>
      <SectionHeading text="Testimonials" noBorder={true} />
      <div className={classes.testimonials}>
        { testimonials.map( testimonial => {
          return getTestimonial(classes, testimonial.fields);
        })}
      </div>
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  testimonials: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testimonialsSection: {
    backgroundColor: theme.colors.gray100,
    padding: '60px 20px',
    [theme.breakpoints.up('md')]: {
      padding: '80px 0',
    }
  },
  testimonial: {
    maxWidth: '300px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      maxWidth: '600px',
    }
  },
  personInfo: {
    margin: '4px 0 0',
    lineHeight: '1'
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '20px 0 5px'
  },
  quote: {
    fontSize: '32px',
    color: theme.colors.gray300
  }
}))

export default Testimonials;