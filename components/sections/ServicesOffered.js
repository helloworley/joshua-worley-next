import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SectionHeading from '../layout/SectionHeading'
import RichTextToHTML from '../RichTextToHTML'


import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const ServicesOffered = props => {
  const classes = useStyles();
  const [selectedService, setSelectedService] = useState(props.services[1].title["en-US"]);

  const handleChange = (event) => {
    setSelectedService(event.target.value)
  }; 

  const materialSelect = (
    <div className={classes.materialSelect}>
      <FormControl fullWidth className={classes.formControl}>
        <Select native value={selectedService} onChange={handleChange}>
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
    </div>
  )

  const desktopSelectItems = services => {
    return (
      <ul className={classes.desktopServiceSelect}>
        {services.map( service => {
          const title = service.title["en-US"]
          return  (
            selectedService == title ? 
              <li key={title} className={`${classes.desktopServiceSelectLi} selected`} onClick={() => setSelectedService(title)}>{title}</li> :
              <li key={title} className={`${classes.desktopServiceSelectLi} deselected`} onClick={() => setSelectedService(title)}>{title}</li>
          )
        })}
      </ul>
    );
  }

  return (
    <div className={classes.servicesOffered}>
      <div className={classes.servicesOfferedInner}>
          <SectionHeading text="Services Offered" noBorder={true} description="I am currently accepting freelance requests. Some specialized services that people have hired me for include:"/>
          <div className={classes.infoWrapper}>

            {materialSelect}
            {desktopSelectItems(props.services)}

            <div className={classes.serviceContent}>
              {
                props.services.map( service => {
                  const title = service.title["en-US"]
                  const description = (service.description["en-US"].content)
                  const src = service.image ? service.image['en-US'].fields.file['en-US'].url : null;

                  return  (
                    <div className={classes.aboutService} key={title}>
                      <div className={classes.aboutServiceInfo}>
                        <div key={title} className={title == selectedService ? 'show' : 'hide'}>
                          <h3 className={classes.serviceTitle}>{title}</h3>
                          <RichTextToHTML data={description} />
                        </div>
                      </div>
                      <div className={classes.aboutServiceImgContainer}>
                        <div className={title == selectedService ? 'show' : 'hide'}>
                          <img src={src} className={classes.aboutServiceImg}/>
                        </div>
                      </div>
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


const useStyles = makeStyles(theme => ({
  infoWrapper: {
    maxWidth: '1600px',
    margin: '0 auto',
    marginTop: '30px',
    [theme.breakpoints.up('md')]: {
      marginTop: '40px',
      display: 'grid',
    },
  },
  desktopServiceSelect: {
    display: 'none !important',
    paddingLeft: '0',
    marginTop: 0,
    fontFamily: theme.fontFamily.sansSerif,
    [theme.breakpoints.up('md')]: {
      display: 'block !important',
      justifyContent: 'center',
    },
  },
  desktopServiceSelectLi: {
    listStyle: 'none',
    padding: '5px 15px',
    marginBottom: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: '.5s',
    fontFamily: theme.fontFamily.sansSerif,
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
    backgroundImage: 'url(https://images.unsplash.com/photo-1608778945974-fc750076be13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=4234&q=80)',
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
      padding: '100px 0',
      minHeight: '700px'
    },
  },
  [theme.breakpoints.up('md')]: {
    infoWrapper: {
      gridTemplateColumns: '20% 80%',
      padding: '0 40px'
    }
  },
  // [theme.breakpoints.up('md')]: {
  //   infoWrapper: {
  //     // gridTemplateColumns: '25% 75%'
  //   }
  // },
  serviceTitle: {
    fontSize: '32px',
    marginTop: 0,
    fontWeight: '400'
  },
  aboutService: {
    display: 'flex',
    flexDirection: 'column-reverse',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row'
    }
  },
  aboutServiceImgContainer: {
    height: 'auto',
  },
  aboutServiceImg: {
    width: '100%',
    marginBottom: '40px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 0,
    }
  },
  aboutServiceInfo: {
    [theme.breakpoints.up('md')]: {
      width: '80%',
      paddingRight: '80px',
      marginTop: 0
    }
  }
}));

export default ServicesOffered;


