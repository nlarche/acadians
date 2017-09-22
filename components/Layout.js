import React from "react";
import Head from "react-helmet";

import { css, fontFace } from "glamor";

const appCss = css({
  minHeight: '100vh',
  fontSize: '0.8em',
  fontFamily: fontFace({
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    src: "local('Open Sans'), local('OpenSans'), url('https://fonts.googleapis.com/css?family=Roboto')",
  })
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
     
    <footer>{/* ... */}</footer>
  </div>
);

export default Layout;
