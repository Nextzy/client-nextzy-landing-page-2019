import React from 'react'
import App, { Container } from 'next/app'
import PreLoadingPage from '../components/common/PreLoadingPage'

interface MyAppProp extends App {
  Component: any
  pageProps: any
}
class MyApp extends App<MyAppProp> {
  public static async getInitialProps({ Component, ctx }): void {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  public render(): void {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <PreLoadingPage />
        <Component {...pageProps} />
      </Container>
    )
  }
}
export default MyApp
