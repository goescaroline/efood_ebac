import Button from '../Button'
import lixeira from '../../assets/images/lixeira.png'
import {
  CartContainer,
  CartItem,
  Lixeira,
  Overlay,
  Price,
  SideBar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const formatPrice = (preco = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(preco)
  }
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acc, price) => {
      return (acc += price.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <p>{formatPrice(item.preco)}</p>
                <Lixeira onClick={() => removeItem(item.id)} src={lixeira} />
              </div>
            </CartItem>
          ))}
        </ul>
        <Price>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Price>
        <Button type="button" title={'Clique aqui para continuar'} size="big">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
