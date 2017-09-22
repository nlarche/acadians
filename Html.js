import React from 'react'
import Head from 'react-helmet'
import { renderStatic } from "glamor/server";

export default ({ App, render }) => {
  // if needed, you can know if you are in development or in static rendering
  // const isDev = process.env.PHENOMIC_ENV === 'development'
  const { html: { Main, State, Script }, css, ids } = renderStatic(() =>
    render(<App />)
  );
  const helmet = Head.renderStatic()
  return (
    <html {...helmet.htmlAttributes.toComponent()}>
      <head>
        {helmet.meta.toComponent()}
        {helmet.title.toComponent()}
        {helmet.base.toComponent()}
        <style dangerouslySetInnerHTML={{ __html: css }} />
        {helmet.link.toComponent()}
        {helmet.style.toComponent()}
        {helmet.script.toComponent()}
        {helmet.noscript.toComponent()}
      </head>
      <body {...helmet.bodyAttributes.toComponent()}>
        <Main />
        <State />
         <script
          dangerouslySetInnerHTML={{
            __html: `window._glam = ${JSON.stringify(ids)}`
          }}
        />
        <Script />
      </body>
    </html>
  )
}
