import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'


const AboutPage = () => (
  <Layout>
    <h1>About me</h1>
    <p>I am learning to be bette at web dev</p>
    <p>
      You can <Link to="/contact">contact me here.</Link>
    </p>
  </Layout>
)

export default AboutPage
