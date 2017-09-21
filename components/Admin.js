import React from 'react';
import Head from 'react-helmet';
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client';

const Admin = ({ children }) => (
  <div>
    <Head>
      <html lang='en' />
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link
        rel='stylesheet'
        href='https://unpkg.com/netlify-cms@latest/dist/cms.css'
      />
            <script src='https://unpkg.com/netlify-cms@latest/dist/cms.js' />   
    </Head>   
  </div>
);

export default Admin;
