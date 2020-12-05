import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(fromNow: true)
      postBody {
        raw
      }
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.postBody.raw)}
    </Layout>
  )
}
export default Blog
