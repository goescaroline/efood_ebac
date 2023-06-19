import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import RestauranteLista from '../../components/RestauranteLista'

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
  const [restaurante, setRestaurante] = useState<Restaurante[]>([])
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [])

  if (restaurante) {
    return (
      <>
        <Banner />
        <RestauranteLista restaurantes={restaurante} />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Home
