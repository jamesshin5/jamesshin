import * as React from "react"
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

import {menuData} from '../data/MenuData'
import { Button } from "./Button"
import {animateScroll as scroll} from 'react-scroll'
import pdf from '../images/resume.pdf'

const Header = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <Container>
      <Nav>
      <NavLink to="/" onClick={toggleHome}>
        JAMES SHIN
      </NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index)=>(
          <NavLink to={item.id} key={index} smooth={true} duration={500} spy={true} exact="true" offset={-95}>
            {item.title}
          </NavLink>
        ))}
        <NavBtn>
            <Button href = {pdf} round="true">Résumé</Button>
        </NavBtn>
      </NavMenu>
    </Nav>
    </Container>
  );
}

export default Header

const Container = styled.nav`
  display: flex;
  justify-content: center;
  z-index: 100;
  background: #0c0c0c;
`

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background: #0c0c0c;
  display: flex;
  justify-content: space-between;
  padding: 3rem 5%;
  z-index: 100;
  position: fixed;
  /* padding-left: 5%;
  padding-right: 5%; */
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  /* margin-right: 2rem; */
  /* padding: 0 1rem; */
  padding-right: 2rem;
  /* padding-top: 1rem; */
  /* padding-left: 1rem; */
  height: 100%;
  cursor: pointer;
  transition: 0.5s !important;

  &.active {
    color: #3FE0D0;
    /* box-shadow: 0px 2px; */
  }

  &:hover {
    color: #3FE0D0;
    /* box-shadow: 0px 2px; */
  }
`

const Bars = styled(FaBars)`
  display: none; 
  color: #fff;
  transition: 0.3s;

  &:hover {
    color: #3FE0D0;
    /* box-shadow: 0px 2px; */
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-75%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

  }
`

const NavMenu = styled.div`
  display: flex;
  align-items:center;
  /* margin-right: -48px; */

  @media screen and (max-width:768px) {
    display: none;
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  /* padding: 0 1rem; */
  margin-left: 24px;
  /* margin-right: 2rem; */

  @media screen and (max-width:768px) {
    display: none;
  }
`