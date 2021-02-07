import React from 'react';
import App from 'next/app';
import { motion, AnimatePresence } from "framer-motion";
import CssBaseline from '@material-ui/core/CssBaseline';
import Fonts from '../style/fonts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Head from 'next/head';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import themeStyles from '../style/theme'
import { DefaultSeo } from 'next-seo'



const theme = createMuiTheme({
  ...themeStyles
});
class MyApp extends App {
  componentDidMount() {
    Fonts()
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
        <DefaultSeo
           title="Josh Worley"
           description="Digital Designer (App, Web, UI, UX, Product) & Frontend Developer. Josh Worley solves complicated problems with simple solutions."
           openGraph={{
             type: 'website',
             locale: 'en_IE',
             prefix: 'og: http://ogp.me/ns#',
             url: 'https://www.joshworley.io/',
             site_name: 'Josh Worley Portfolio',
             title: 'Josh Worley',
             description: 'Digital Designer (App, Web, UI, UX, Product) & Frontend Developer. Josh Worley solves complicated problems with simple solutions.',
             images: [
               {
                 url: '//images.ctfassets.net/tgk6k1pkyqnt/4xRoBfh7GCKAct5adLGng7/48d351d31ebc016ffa12129e087c2c99/jw-sns-og.png',
                 width: 800,
                 height: 600,
                 alt: 'Josh Worley Portfolio Site',
               }
             ],
           }}
        />
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <AnimatePresence exitBeforeEnter>
            <motion.div exit={{ opacity: 0 }} key={router.route}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </MuiThemeProvider>
      </>
    );
  }
}

export default MyApp;