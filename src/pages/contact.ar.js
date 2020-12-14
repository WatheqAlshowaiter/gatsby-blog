import React from "react"
import Layout from '../components/layout.ar'
import Head from '../components/head.ar'

const ContactPage = () => (
  <Layout>
  <Head title="Contact" />
    <h1>Contact me</h1>
    <p>
      you can contact me via{" "}
      <a href="https://twitter.com/watheq_show" target="_blank" rel="noreferrer">
        @watheq_show
      </a>{" "}
      on Twitter
    </p>
  </Layout>
)

export default ContactPage
