import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children?: string | JSX.Element | JSX.Element[] | number
  size?: 'small' | 'big'
}

const Button = ({ type, title, to, onClick, children, size }: Props) => {
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
