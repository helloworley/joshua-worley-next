import React from 'react';
import App from 'next/app';
import { motion, AnimatePresence } from "framer-motion"

import CssBaseline from '@material-ui/core/CssBaseline';
import Fonts from '../style/fonts'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


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