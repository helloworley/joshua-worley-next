
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import ContentfulToHTML from '../../contentful/ContentfulToHTML'
import { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  infoWrapper: {
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px'
    },
  },
  desktopServiceSelect: {
    display: 'none !important',
    paddingLeft: '0',
    borderBottom: `solid 1px ${theme.colors.line}`,
    marginBottom: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'flex !important',
      justifyContent: 'center',
    },
  },
  desktopServiceSelectLi: {
    listStyle: 'none',
    padding: '5px 15px',
    marginBottom: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: '600',
    letterSpacing: '1px',
    transition: '.5s',
    '&.selected': {
      color: theme.colors.headings,
    },
    '&.deselected': {
      color: theme.colors.textUnfocused,
      '&:hover': {
        color: theme.colors.headings,
      }
    },
  },
  materialSelect: {
    display: 'block !important',
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      display: 'none !important'
    },
  },
  servicesOffered: {
    backgroundImage: 'url(/new-york.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  servicesOfferedInner: {
    minHeight: '400px',
    padding: theme.padding.xs,
    backgroundColor: 'rgba(255,255,255,.9)',
    [theme.breakpoints.up('sm')]: {
      padding: theme.padding.sm
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.padding.md
    },
  }
}));


const ServicesOffered = props => {
  const classes = useStyles();
  const [selectedService, setSelectedService] = useState('App Design');

  const handleChange = (event) => {
    setSelectedService(event.target.value)
  };

  const materialSelect = (
    <FormControl fullWidth className={classes.formControl}>
      <Select
        native
        value={selectedService}
        onChange={handleChange}
      >
        {
          props.services.map( service => {
            const title = service.title["en-US"]
            return (
              <option key={title} value={title}>{title}</option>
            ) 
          })
        }
      </Select>
    </FormControl>
  )
  

  return (
    <div className={classes.servicesOffered}>
      <div className={classes.servicesOfferedInner}>
        <div className="section-wrapper">
          <SectionHeading text="Services Offered" noBorder={true} />
          <div className={classes.infoWrapper}>
            <div className={classes.selectService}>
              <ul className={classes.desktopServiceSelect}>
                {
                  props.services.map( service => {
                    const title = service.title["en-US"]
                    return  (
                      selectedService == title ? 
                        <li className={`${classes.desktopServiceSelectLi} selected`} onClick={() => setSelectedService(title)}>{title}</li> :
                        <li className={`${classes.desktopServiceSelectLi} deselected`} onClick={() => setSelectedService(title)}>{title}</li>
                    )
                  })
                }
              </ul>
              <div className={classes.materialSelect}>
                {materialSelect}
              </div>
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
      </div>
  )
};

export default ServicesOffered;


