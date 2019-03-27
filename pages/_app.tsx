import React from 'react'
import App, { Container } from 'next/app'
interface MyAppProp extends App {
  Component: any
  pageProps: any
}
class MyApp extends App<MyAppProp> {
  public static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}
export default MyApp
