import * as React from "react"

import Header from "./Header.js"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import "@fontsource/open-sans"

const Layout = ({ children, toggle }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <GlobalStyle/>
      <Header toggle={toggle}/>
        <main>{children}</main>
      <Footer />
    </>
  )
}



export default Layout
 