import { makeStyles } from '@material-ui/core/styles'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const headings = 'Raleway, Sans-Serif';
const paragraph = `'Frank Ruhl Libre', Sans-Serif`

const useStyles = makeStyles(theme => ({
  RichTextToHTML: {
    'h1': {
      fontFamily: headings,
    },
    'h2': {
      fontFamily: headings,
    },
    'h3': {
      fontFamily: headings,
    },
    'h4': {
      fontFamily: headings,
    },
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
        fontSize: '14px'
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '15px'
      },
    },
    '& a' : {
      color: theme.colors.link,
      fontFamily: paragraph,
      fontWeight: '500',
      lineHeight: '1.8',
      fontSize: '14px',
      lineHeight: '1.8',
      '&:hover': {
        color: theme.colors.linkHovered
      },
      [theme.breakpoints.up('md')]: {
        marginTop: '14px',
        fontSize: '14px'
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
    [theme.breakpoints.up('md')]: {
      '& p': {
        fontSize: '14px'
      }
    }
  },
}));


// documentToHtmlString doesn't return image embeds, so custom options are needed
let options = {
  renderNode: {
    'embedded-asset-block': (node) =>
      `<img style="max-width: 100%" src="${node.data.target.fields.file.en.url}"/>`
  }
}
// let bodyHTML = body ? documentToHtmlString(body, options) : ''
const RichTextToHTML = props => {
  const classes = useStyles();

  const document = {
    nodeType: 'document',
    content: props.data,
  }

  function createMarkup() {
    return {__html: documentToHtmlString(document, options)};
  }

  return(
    <div className={classes.RichTextToHTML}>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
};

export default RichTextToHTML;