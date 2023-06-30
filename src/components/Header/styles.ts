import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const HeaderBar = styled.header`
  width: 100%;
  height: 186px;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: 900;
  align-items: center;
  justify-content: center;
  display: flex;

  .container {
    display: flex;
    justify-content: space-between;
  }

  span {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const Logo = styled.div`
  position: absolute;
`
export const CartButton = styled.a`
  text-decoration: none;
  color: ${colors.orange};
  display: flex;
  cursor: pointer;
`
