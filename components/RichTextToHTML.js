import { makeStyles } from '@material-ui/core/styles'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const headings = 'Raleway, Sans-Serif';
const paragraph = `'Frank Ruhl Libre', Sans-Serif`

const useStyles = makeStyles(theme => ({
  RichTextToHTML: {
    '& p' : {
      color: theme.colors.abyss,
      fontFamily: paragraph,
      fontWeight: '500',
      lineHeight: '1.8',
      margin: '0 0 10px',
      fontSize: '14px',
      lineHeight: '1.8',
      [theme.breakpoints.up('md')]: {
        marginTop: '14px',
      },
    },
    '& a' : {
      color: theme.colors.link,
      fontFamily: paragraph,
      fontWeight: '500',
      lineHeight: '1.8',
      lineHeight: '1.8',
      '&:hover': {
        color: theme.colors.linkHovered
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '14px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '15px'
      },
    },
    '& li p': {
      margin: '0',
    },
    '& img': {
      margin: '56px 0 24px'
    },
    '& h2': {
      margin: '56px 0 16px'
    },
    '& h3': {
      margin: '40px 0 16px'
    },
  },
  white: {
    '& p' : {
      color: theme.colors.gray700,
    }
  }
}));


// documentToHtmlString doesn't return image embeds, so custom options are needed
let options = {
  renderNode: {
    'embedded-asset-block': (node) => {
      const fields = node.data.target.fields;
      const file = node.data.target.fields.file['en-US'];
      const description = fields.description ? fields.description['en-US'] : '';
      const { url } = file;
      if (url.indexOf('//images') != -1) {
        return `
          <figure>
            <img style="max-width: 100%" src="${node.data.target.fields.file['en-US'].url}"/>
            ${ description && `<figcaption>${description}</figcaption>` } 
          </figure>
        `
      } else if (url.indexOf('//videos') != -1) {
        return `
          <figure>
            <video width="100%" style="margin: 40px 0;" height="auto" controls>
              <source src="${url}" type="video/mp4">
            Your browser does not support the video tag.
            </video>
            ${ description && `<figcaption>${description}</figcaption>` } 
          </figure>
        `
      }
    }
      
  }
}

const RichTextToHTML = props => {
  const classes = useStyles();
  const color = props.color ? props.color : 'dark';
  const document = {
    nodeType: 'document',
    content: props.data,
  }
  function createMarkup() {
    return {__html: documentToHtmlString(document, options)};
  }

  return(
    <div className={`${classes.RichTextToHTML} ${classes[color]}`}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
};

export default RichTextToHTML;