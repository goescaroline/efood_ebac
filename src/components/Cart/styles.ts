import styled from 'styled-components'
import { color } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const SideBar = styled.aside`
  background-color: ${color.orange};
  z-index: 1;
  padding: 32px 8px 0px 8px;
  width: 360px;
`
export const Price = styled.p`
  font-weight: 700;
  font-size: 14px;
  justify-content: space-between;
  color: ${color.orange2};
  display: flex;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${color.orange2};
  position: relative;
  padding: 8px;
  margin-bottom: 16px;

  > img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const Lixeira = styled.img`
  width: 16px;
  height: 16px;
  bottom: 8px;
  right: 8px;
  position: absolute;
  cursor: pointer;
`
