const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Lora:wght@400;500&display=swap'
  ]
  fontLinks.map( fontLink => {
    const link = document.createElement('link')
    link.href = fontLink
    link.rel = 'stylesheet'
    document.head.appendChild(link)
  })

  const lato = new FontFaceObserver('Lato')

  lato.load().then(() => {
    document.documentElement.classList.add('lato')
  })
}

export default Fonts