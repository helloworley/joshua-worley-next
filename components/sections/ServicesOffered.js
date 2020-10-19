
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ContentfulToHTML from '../../helpers/ContentfulToHTML'
import { useState } from 'react';

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
  const [selectedService, setSelectedService] = useState('App Design');

  return (
    <div className={classes.servicesOffered}>
      <div className="section-wrapper">
        <SectionHeading text="Services Offered" />
        <div className={classes.infoWrapper}>
          {selectedService}
          <div className={classes.selectService}>
            {
              props.services.map( service => {
                const title = service.title["en-US"]
                return  (
                  <h1 onClick={() => setSelectedService(title)}>{title}</h1>
                )
              })
            }
          </div>
          <div className={classes.serviceContent}>
            {
              props.services.map( service => {
                const title = service.title["en-US"]
                const description = (service.description["en-US"].content)
                return  (
                  <div className={title == selectedService ? 'show' : 'hide'}>
                    <h3 className="hide">{title}</h3>
                    <ContentfulToHTML data={description} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
};

export default ServicesOffered;


