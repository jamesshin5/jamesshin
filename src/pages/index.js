import React, {useState} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Projects from '../components/Projects'
import Experience from "../components/Experience"
import DropDown from '../components/DropDown'
import Contact from '../components/Contact'

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <Layout toggle={toggle}>
      <SEO title="James Shin"/>
      <DropDown toggle={toggle} isOpen={isOpen} />
      <Hero />
      <Projects />
      <Experience />
      <Contact/>
    </Layout>
)}

export default IndexPage
