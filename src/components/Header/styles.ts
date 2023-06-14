import styled from 'styled-components'
import { color } from '../../styles'

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

  a {
    text-decoration: none;
    color: ${color.orange};
    display: flex;
  }

  span {
    margin-right: 8px;
  }
`
export const Logo = styled.div`
  position: absolute;
`
