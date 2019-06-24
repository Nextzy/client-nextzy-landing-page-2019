import * as React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
export default class extends Document {
  static async getInitialProps(ctx): React.FC {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = (): void =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): void {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0" //,maximum-scale=1.0,user-scalable=no
          />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="640" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="shortcut icon" href={`/${process.env.PATH_IMG}static/favicon.ico`} />
          <link rel="preload" href={`/${process.env.PATH_IMG}static/fonts/Montserrat/Montserrat-Regular.ttf`} as="font" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQvDHx-wwqQCB71fmSOI_sgNPd2fR3iTM" defer />
          <script src="https://cdn.bootcss.com/fullPage.js/3.0.5/vendors/scrolloverflow.min.js" defer></script>
        </Head>
        <body>
          <main>
            <Main />
          </main>
          <NextScript />
        </body>
      </html>
    )
  }
}
