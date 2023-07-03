import { useParams } from 'react-router-dom'

import Header from '../../components/Header'
import Hero from '../../components/Hero'
import MenuList from '../../components/MenuList'
import Cart from '../../components/Cart'

import { useGetCardapioQuery } from '../../services/api'
import Loader from '../../components/Loader'

const Cardapio = () => {
  const { id } = useParams()
  const { data: menu } = useGetCardapioQuery(id!)

  if (!menu) {
    return <Loader />
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
