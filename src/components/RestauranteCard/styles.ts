import styled from 'styled-components'
import { color } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonLink } from '../Button/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  max-width: 472px;
  width: 100%;
  height: 420px;
  display: block;
  background-color: ${color.white};
  color: ${color.orange};
  text-decoration: none;
  position: relative;

  img {
    display: block;
    width: 100%;
    height: 217px;
    border: 0;
    object-fit: cover;
  }

  .container {
    background-color: ${color.backgroundColor};
  }

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const CardTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`
export const Avaliation = styled.div`
  display: flex;

  p {
    margin-right: 8px;
  }

  img {
    height: 21px;
    max-width: 21px;
    width: 100%;
  }
`
export const DescriptionCard = styled.p`
  font-size: 14px;
  font-weight: 400;
  height: 203px;
  border: 1px solid ${color.orange};
  border-top: none;
  padding: 8px;
  line-height: 22px;
  display: flex;
  flex-direction: column;

  ${ButtonLink} {
    padding: 4px 8px;
    position: absolute;
    left: 8px;
    bottom: 8px;
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
`
