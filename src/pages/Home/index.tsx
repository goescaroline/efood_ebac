import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantList'

import { useGetRestauranteQuery } from '../../services/api'

export interface CardapioItem {
  id: number
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  capa: string
  avaliacao: number
  descricao: string
  cardapio: CardapioItem[]
}

const Home = () => {
  const { data: restaurante } = useGetRestauranteQuery()
  if (restaurante) {
    return (
      <>
        <Banner />
        <RestaurantList restaurantes={restaurante} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
