import React from 'react'
import { Link } from 'react-router'
import Layout from './Layout'
import { BodyRenderer } from '@phenomic/preset-react-app/lib/client'

const BlogPost = ({ isLoading, page }) => (
  <Layout>
    {isLoading && 'Loading...'}
    {!isLoading &&
      page.node && (
        <article>
          <BodyRenderer>{page.node.body}</BodyRenderer>
        </article>
      )}
    <footer>
      <Link to='/'>Go to home</Link>
    </footer>
  </Layout>
)

export default BlogPost
