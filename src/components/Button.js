import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
  background: ${ ({primary}) => (primary ? '#a464f4' : '#3FE0D0')};
  white-space: nowrap;
  padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
  color: #fff;
  font-size:  ${({big}) => (big ? '16px 40px' : '10px 32px')};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({round}) => (round ? '3px' : 'none')};

  &:hover {
    background: ${({primary}) => (primary ? '#a464f4' : '#a464f4')};
    transform: translateY(-2px);
  }
`