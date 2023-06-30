import * as S from './styles'

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
      <S.ButtonContainer
        type="button"
        title={title}
        onClick={onClick}
        size={size}
      >
        {children}
      </S.ButtonContainer>
    )
  }
  return (
    <S.ButtonLink title={title} to={to as string}>
      {children}
    </S.ButtonLink>
  )
}

export default Button
