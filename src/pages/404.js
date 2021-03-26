import * as React from "react"
import { Button } from "../components/Button"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NotFoundContainer data-sal="slide-down" data-sal-easing="ease" data-sal-duration="1000">
      <NotFoundTitle>404 PAGE NOT FOUND </NotFoundTitle>
      {/* <NotFoundDescription>Page not found!</NotFoundDescription> */}
      <NotFoundButton round="true" to="/">Return Home</NotFoundButton>
    </NotFoundContainer>
    {/* <h1>404: Not Found</h1> */}
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </Layout>
)

export default NotFoundPage

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  height: 80vh;
  padding: 0 2rem;
  padding-top: 5%;
`
const NotFoundTitle = styled.h1`
  color: #3FE0D0;
  font-size: clamp(5rem, 5vw, 20rem);
  text-align: center;
`
// const NotFoundDescription = styled.p`
//   color: #fff;
//   font-size: clamp(2rem, 16vw, 2rem);
// `
const NotFoundButton = styled(Button)`
  margin-top: 2rem;
`
