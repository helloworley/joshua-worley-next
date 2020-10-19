import { makeStyles } from '@material-ui/core/styles'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'


const useStyles = makeStyles(theme => ({
  RichTextToHTML: {
    'h1': {
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    'h2': {
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    'h3': {
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    'h4': {
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    },
    '& p': {
      color: '#616161',
      fontFamily: 'Lato,"Helvetica Neue",Arial,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
      fontWeight: '500',
      lineHeight: '1.8',
      margin: '0 0 32px',
      fontSize: '1em',
      lineHeight: '1.8'
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