import * as React from "react"
import { Link } from 'gatsby'
import styled from 'styled-components'

import {heroButton} from '../data/HeroButtons'

const Footer = () => {
  return (
    <Container>
      <BlueLine data-sal="slide-down" data-sal-easing="ease" data-sal-duration="1000"></BlueLine>
      <HeroButtons data-sal="slide-left" data-sal-easing="ease" data-sal-duration="1000">
        {heroButton.map((item, index)=>(
          <IconLinks to={item.link} key={index}>
            {item.icon}
          </IconLinks>
        ))}
      </HeroButtons>
    </Container>
  );
}

export default Footer

const Container = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px;
  z-index: 100;
  position: relative;
  background: #0c0c0c;
`


const BlueLine = styled.div`
  background: #3FE0D0;
  width: 30px;
  height: 3px;
`

const HeroButtons = styled.div`
  margin-top: 2rem;
  width: 12rem;
  display: flex;
  justify-content: space-between;
`

const IconLinks = styled(Link)`
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
