import React from 'react'
import styled from 'styled-components'
import {ContactData} from '../data/ContactData.js'

const Contact = () => {
  return (
    <ContactContainer id="contact-container">
      <ContactTitle data-sal="slide-left" data-sal-easing="ease" data-sal-duration="1000">Contact</ContactTitle>
      <ContactInfo data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1000">
        {ContactData.map((item, index)=>(
          <ContactEmail key={index}>{item.email}</ContactEmail>
        ))}
      </ContactInfo>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  background: #0c0c0c;
  padding: 3rem calc((100vw - 1300px)/2);
  color: #fff;
`
const ContactTitle = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  text-align: center;
  letter-spacing: 2px;
  font-weight: bold;
  color: #3FE0D0;
  padding-top: 3rem;
  padding-bottom: 5rem;
`
const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  line-height:3.5rem;
`

const ContactEmail = styled.h1`
  font-size: clamp(0.5rem, 3vw, 1.25rem);
  font-family: Open Sans, sans-serif;
  letter-spacing: 2px;
  text-align:center;
`

