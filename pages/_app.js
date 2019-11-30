import React from 'react';
import App from 'next/app';
import { motion, AnimatePresence } from "framer-motion"

import CssBaseline from '@material-ui/core/CssBaseline';
import Fonts from '../style/fonts'

class MyApp extends App {
  componentDidMount() {
    Fonts()
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <CssBaseline />
          <AnimatePresence exitBeforeEnter>
            <motion.div exit={{ opacity: 0 }} key={router.route}>
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
      </>
    );
  }
}

export default MyApp;