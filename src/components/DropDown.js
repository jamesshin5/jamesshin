import React from 'react'
import styled from 'styled-components'
import { menuData } from '../data/MenuData'
import {heroButton} from '../data/HeroButtons'
import { Link } from 'react-scroll'
import {Link as GatsbyLink} from 'gatsby'
import {FaTimes} from 'react-icons/fa'

const DropDown = ({isOpen, toggle}) => {
  return (
    <DropDownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <DropDownWrapper>
        <DropDownMenu>
          {menuData.map((item, index)=>(
            <NavLink  onClick={toggle} to={item.id} key={index} smooth={true} duration={500} spy={true} exact="true">
             {item.title}
            </NavLink>
          ))}
        </DropDownMenu>
        <HeroButtons>
          {heroButton.map((item, index)=>(
            <IconLinks to={item.link} key={index}>
              {item.icon}
            </IconLinks>
          ))}
        </HeroButtons>
      </DropDownWrapper>
    </DropDownContainer>
  )
}

export default DropDown

const DropDownContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #0c0c0c;
  display: grid;
  align-items: center; 
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? 1 : 0)};
  top:  ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
const HeroButtons = styled.div`
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

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled(FaTimes)`
  color: #fff;
  transition: 0.3s;
  &:hover {
    color: #3FE0D0;
  }
`
const DropDownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DropDownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 80px);
  }
` 

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:1.5rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &.active {
    color: #3FE0D0;
   }

  &:hover {
    color: #3FE0D0;
  }
`