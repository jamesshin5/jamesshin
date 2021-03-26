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
      <Form 
        name="contact v2"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact v2" />

        <div hidden>
          <input name="bot-field" />
        </div>

        <FormInfo>
          <FormInput type="text" name="name" placeholder="Name" />
        </FormInfo>
        
        <FormInfo>
          <FormInput type="email" name="email" placeholder="Email" />
        </FormInfo>

        <FormInfo>
          <FormTextArea name="comments" placeholder="Message"></FormTextArea>
        </FormInfo>

        <FormButton type="submit">
          <ButtonText>
            SUBMIT
          </ButtonText>
        </FormButton>

      </Form>
    </ContactContainer>
  )
}

export default Contact

const ContactContainer = styled.div`
  background: #0c0c0c;
  padding: 3rem calc((100vw - 1300px)/2);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

// Styles for form elements

const Form = styled.form`
  background: #fff;
  border-radius: 3px;
  padding-top: 2rem;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FormButton = styled.button`
  border: none;
  background: #3FE0D0;
  width: 100%;
  padding: 1rem 0;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  transition: 0.5s;

  &:hover {
    background: #a464f4;
  }
`
const ButtonText = styled.h1`
  font-size: clamp(0.5rem, 3vw, 0.75rem);
  font-weight: bold;
  letter-spacing: 5px;
`
const FormInfo = styled.div`
  width: 100%;
  padding: 0 2rem;
  margin: 0.5rem 0;
`

const FormInput = styled.input`
  background: #f1f5f8;
  border: none;
  padding: 0.8rem 0.8rem;
  width: clamp(15rem, 40vw, 35rem);

  ::placeholder {
  color: #526678;
  font-size: 14px;
}
`
const FormTextArea = styled.textarea`
  resize: none;
  background: #f1f5f8;
  border: none;
  padding: 0.8rem 0.8rem;
  margin-bottom: 1rem;
  width: clamp(15rem, 40vw, 35rem);

  ::placeholder {
  color: #526678;
  font-size: 14px;
}
`