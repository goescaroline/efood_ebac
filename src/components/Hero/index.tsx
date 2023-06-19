import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Image } from './styles'
import { Restaurante } from '../../pages/Home'

const Hero = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<Restaurante>()
  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])
  return (
    <Image style={{ backgroundImage: `url(${restaurante?.capa})` }}>
      <div className="container">
        <p>{restaurante?.tipo}</p>
        <h2>{restaurante?.titulo}</h2>
      </div>
    </Image>
  )
}

export default Hero
