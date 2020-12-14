import React from "react"
import Header from "./header.ar"
import Footer from "./footer.ar"

import "../styles/index.scss"
import LayoutStyles from "./layout.module.ar.scss"

const Layout = props => {
  return (
    <div className={LayoutStyles.container}>
      <div className={LayoutStyles.content}>
        <Header />
        {props.children}
      </div>
       <Footer />
    </div>
  )
}
export default Layout
