import React from 'react'
import styled from 'styled-components'
import {Link as ScrollLink} from 'react-scroll'
import {Link as GatsbyLink} from 'gatsby'
import {heroButton} from '../data/HeroButtons'
import {StaticImage} from 'gatsby-plugin-image'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <Horizontal>
            <HeroH1 data-sal="slide-down" data-sal-easing="ease" data-sal-duration="2000" data-sal-delay="250">Hi! I'm </HeroH1>
            <HeroH1 blue="true" end="true"> James.</HeroH1>
          </Horizontal>
          <HeroP data-sal="slide-up" data-sal-easing="ease" data-sal-duration="2000" data-sal-delay="250">I'm a third year CS major coding websites at UC Berkeley!</HeroP>
          <Horizontal>
          <ContactButton  
            round="true" 
            data-sal="slide-right" 
            data-sal-easing="ease" 
            data-sal-duration="2000"
            to="contact-container" 
            smooth={true} 
            duration={500} 
            spy={true} 
            exact="true" 
            offset={-95}
          >
            Contact Me
          </ContactButton>
          <ContactButton  
            primary='true'
            round="true" 
            data-sal="slide-right" 
            data-sal-easing="ease" 
            data-sal-duration="2000"
            to="project-container" 
            smooth={true} 
            duration={500} 
            offset={-95}
          >
            View Projects
          </ContactButton>
          </Horizontal>
          <HeroButtons data-sal="slide-up" data-sal-easing="ease" data-sal-duration="1500">
            {heroButton.map((item, index)=>(
              <IconLinks to={item.link} key={index}>
                {item.icon}
              </IconLinks>
            ))}
          </HeroButtons>
        </HeroItems>
      </HeroContent>
      <StaticImage 
        src="../images/coding.png" 
        alt="something" 
        style={{
          transform: "translate(-75%, 0%)",
          width: "clamp(5rem,14vw, 18rem )"

        }}
        data-sal="slide-down" data-sal-easing="ease" data-sal-duration="2000"
      />
    </HeroContainer>
  )
} 

export default Hero

const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  flex-direction: row;
  height: 100vh;
  padding: 0 1rem;
  justify-content: space-between;
  position: relative;
  align-items: center;
  color: #fff;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  color: #fff;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 50px);
  width: 50%;
  max-height: 100%;
  margin-left: 3rem;
  padding: 0rem calc((100vw - 1800px)/2);
  justify-content: center;
`
const Horizontal = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 968px) {
    flex-direction: column;
    margin-left: 0rem;
  }
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height:1.5;
`
const HeroH1 = styled.h1`
  font-size: clamp(4rem, 6vw, 4rem);
  margin-bottom:1rem;
  letter-spacing: 2px;
  color: ${({blue}) => (blue ? '#3FE0D0' : '#fff')};
  padding-left: ${ ({end}) => (end ? '1rem' : 'none')};
  font-weight: bold;
  transition: 0.3s;

  @media screen and (max-width: 968px) {
    padding-left: 0rem;
    transform: ${ ({end}) => (end ? 'translateY(-25%)' : 'none')}; 
    margin-bottom: ${ ({end}) => (end ? '0rem' : '0rem')};;
  }

  &:hover {
    color: ${ ({end}) => (end ? '#A464f4' : 'none')};;
  }
`
const HeroP = styled.p`
  font-size: clamp(0.5rem, 3vw, 1.25rem);
  font-family: 'Open Sans', sans-serif;
  margin-bottom:2rem;
  letter-spacing: 2px;
  color: grey;
`
const HeroButtons = styled.div`
  margin-top: 2rem;
  width: 12rem;
  display: flex;
  justify-content: space-between;
`

const IconLinks = styled(GatsbyLink)`
  font-size: 1.5rem;
  color: black;
  transition: 0.5s;
  background-color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;

  &:hover {
    background: ${({primary}) => (primary ? '#3FE0D0' : '#3FE0D0')};
    transform: translateY(-2px);
  }
`

export const ContactButton = styled(ScrollLink)`
  background: ${ ({primary}) => (primary ? '#fff' : '#3FE0D0')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
  color: ${ ({primary}) => (primary ? '#0c0c0c' : '#fff')};
  font-size:  ${({big}) => (big ? '16px 40px' : '10px 32px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({round}) => (round ? '3px' : 'none')};
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
	transform: ${ ({primary}) => (primary ? 'scale(1)' : 'none')};
	animation: ${ ({primary}) => (primary ? 'pulse 3s infinite' : 'none')};

  &:hover {
    background: ${({primary}) => (primary ? '#a464f4' : '#a464f4')};
    color: ${ ({primary}) => (primary ? '#fff' : '#fff')};
    transform: translateY(-2px);
  }

  @keyframes pulse {
	0% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	50% {
		transform: scale(0.95);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(1);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
`
