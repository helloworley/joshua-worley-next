import { makeStyles } from '@material-ui/core/styles'
import RichTextToHTML from '../RichTextToHTML'
import SectionHeading from '../layout/SectionHeading'

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
        <span>"</span>
      </div>
      <div className={classes.quoteInfo}>
        <RichTextToHTML data={quote} />
        <div className={classes.person}>
          <img className={classes.avatar} src={avatar} />
          <div>
            <p className={classes.personName}>{name}</p>
            <p className={classes.personInfo}>{position}</p>
            {
              link ? <a href={link} target="_blank"><p className={classes.personInfo}>{company}</p></a>
              : <p className={classes.personInfo}>{company}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimonials = props => {
  const classes = useStyles();
  const { testimonials } = props;
  return (
    <div className={classes.testimonialsSection}>
      <SectionHeading text="Testimonials" description="I love working with people, and people love working with me." />
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
    gridColumnGap: '80px',
    alignItems: 'top',
    maxWidth: '1440px',
    margin: '0 auto',
    ...theme.content.inner.sm,
    [theme.breakpoints.up('md')]: { 
      ...theme.content.inner.md, 
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('lg')]: { 
      ...theme.content.inner.lg, 
    },
    [theme.breakpoints.up('xl')]: { 
      ...theme.content.inner.xl, 
    },
    '& p': {
      color: theme.colors.gray600,
      maxWidth: 900
    }
  },
  testimonialsSection: {
    ...theme.backgroundImage,
    ...theme.content.outer.sm,
    [theme.breakpoints.up('md')]: {
      padding: '80px 0',
      ...theme.content.outer.md,
    }
  },
  testimonial: {
    position: 'relative',
    paddingBottom: '120px',
    minHeight: '340px',
    margin: '60px 0',
    '&:not(:last-of-type)': {
      marginBottom: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      minHeight: '240px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '540px',
      minHeight: '440px',
      margin: 0,
      '&:not(:last-of-type)': {
        marginBottom: 0,
      },
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '380px',
    }
  },
  quoteInfo: {
    position: 'absolute',
    zIndex: '10',
    [theme.breakpoints.up('md')]: { 
    }
  },
  person: {
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: '10px',
    },
    '& a': {
      color: theme.colors.gray600,
      '&:hover': {
        color: theme.colors.gray300,
      }
    }
  },
  personInfo: {
    margin: '0 0 4px',
    lineHeight: '1'
  },
  personName: {
    margin: '4px 0 0',
    fontSize: '1.5em',
  },
  avatar: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: '20px 0 5px'
  },
  quoteWrapper: {
    textAlign: 'center',
    position: 'absolute',
    left: '-35px',
    top: '-50px',
    '& span': {
      fontSize: 160,
      color: theme.colors.gray200,
      zIndex: '0',
      fontFamily: theme.fontFamily.serif,
    }
  },
}))

export default Testimonials;