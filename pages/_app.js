import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'

import configureStore from '../redux/configureStore'
import Page from '../components/Page'

/**
 * @param {object} initialState
 * @param {boolean} options.isServer indicates whether it is a server side or client side
 * @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
 * @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
 * @param {boolean} options.debug User-defined debug mode param
 * @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR
 */
const makeStore = configureStore

class EcomlibApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props

    return (
      <>
        <Head>
          <title>
            EcomLib | Find the Best E-commerce Courses &amp; Tutorials
          </title>
        </Head>
        <Page>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Page>
      </>
    )
  }
}

export default withRedux(makeStore)(EcomlibApp)
