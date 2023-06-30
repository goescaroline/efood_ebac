import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'

import { useGetCardapioQuery } from '../../services/api'

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
