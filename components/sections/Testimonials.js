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
  
  return (
    <div className={classes.testimonial} key={name}>
      <div className={classes.quoteWrapper}>
        <FormatQuoteIcon className={classes.quote}/>
      </div>
      <RichTextToHTML data={quote} />
      <div className={classes.person}>
        <img className={classes.avatar} src={avatar} />
        <div>
          <p className={classes.personInfo}>{name}</p>
          <p className={classes.personInfo}>{position}</p>
          {
            link ? <a href={link} target="_blank"><p className={classes.personInfo}>{company}</p></a>
            : <p className={classes.personInfo}>{company}</p>
          }
        </div>
      </div>
    </div>
  )
}

const Testimonials = props => {
  const classes = useStyles();
  const { testimonials } = props;
  return (
    <div className={classes.testimonialsSection} style={{backgroundImage: `url('./scales.jpg')`}}>
      <SectionHeading color="white" text="Testimonials" description="I love working with people, and people love working with me." />
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
    padding: '20px',
    gridColumnGap: '40px',
    alignItems: 'top',
    maxWidth: '1440px',
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      padding: '40px',
      gridTemplateColumns: 'repeat(3, 1fr)',
    }
  },
  testimonialsSection: {
    backgroundColor: theme.colors.gray100,
    padding: '60px 20px',
    ...theme.backgroundImage,
    [theme.breakpoints.up('md')]: {
      padding: '80px 0',
    }
  },
  testimonial: {
    ...theme.backgroundFilter,
    borderRadius: theme.borderRadius.card,
    padding: theme.borderRadius.card,
    position: 'relative',
    paddingBottom: '120px',
    '&:not(:last-of-type)': {
      marginBottom: '50px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '540px',
      minHeight: '400px',
      '&:not(:last-of-type)': {
        marginBottom: 0,
      },
    }
  },
  person: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '24px',
    left: '24px',
    '& img': {
      marginRight: '10px',
    },
    '& a': {
      color: theme.colors.white,
      '&:hover': {
        color: theme.colors.gray200,
      }
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
  quoteWrapper: {
    textAlign: 'center',
  },
  quote: {
    fontSize: '32px',
    color: theme.colors.white,
  }
}))

export default Testimonials;