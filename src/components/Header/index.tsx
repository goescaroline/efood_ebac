import vector from '../../assets/images/Vector.svg'
import { open } from '../../store/reducers/cart'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, Logo, CartButton } from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
      <Logo>
        <Link to="/">
          <img src={logo} />
        </Link>
      </Logo>
      <div className="container">
        <p>Restaurantes</p>

        <CartButton onClick={openCart}>
          <span>{items.length}</span>produto(s) no carrinho
        </CartButton>
      </div>
    </HeaderBar>
  )
}

export default Header
