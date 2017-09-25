import React from "react";
import Head from "react-helmet";

import { css, fontFace } from "glamor";

import Footer from './Footer';

const appCss = css({
  minHeight: "100vh",
  fontSize: "0.8em",
  fontFamily: fontFace({
    fontFamily: "Oswald",
    fontStyle: "normal",
    fontWeight: 400,
    src:
      "local('Open Sans'), local('OpenSans'), url('https://fonts.googleapis.com/css?family=Oswald')"
  }),
});

css.global('html', {
    background: "url(/assets/background.jpg) no-repeat center center fixed",
    backgroundSize: "cover"
  })

const Layout = ({ children }) => (
  <div {...appCss}>
    <Head>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <header>{/* ... */}</header>
    <div>{children}</div>

    <Footer />
  </div>
);

export default Layout;
