import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import { Restaurante } from '../Home'
import { useEffect, useState } from 'react'
import CardapioList from '../../components/CardapioList'

const Cardapio = () => {
  const { id } = useParams()
  const [menu, setMenu] = useState<Restaurante>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setMenu(res))
  }, [id])

  if (!menu) {
    return <h4>Carregando</h4>
  }

  return (
    <>
      <Header />
      <Hero />
      <CardapioList items={menu.cardapio} />
    </>
  )
}

export default Cardapio
