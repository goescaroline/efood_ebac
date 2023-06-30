import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'
import { useGetCardapioQuery } from '../../services/api'
import Cart from '../../components/Cart'

const Cardapio = () => {
  const { id } = useParams()
  const { data: menu } = useGetCardapioQuery(id!)

  if (!menu) {
    return <h4>Carregando</h4>
  }

  return (
    <>
      <Header />
      <Hero />
      <Cart />
      <MenuList items={menu.cardapio} />
    </>
  )
}

export default Cardapio
