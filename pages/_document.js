import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="description" content="description" />
          <meta name="keywords" content="ecomlib" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
