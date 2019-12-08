import React from 'react';
import App from 'next/app';
import { motion, AnimatePresence } from "framer-motion";
import CssBaseline from '@material-ui/core/CssBaseline';
import Fonts from '../style/fonts';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Head from 'next/head'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: 'rgb(23, 105, 170)',
      dark: '#000'
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true
  }
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
        <title>Joshua Worley</title>
      </Head>
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