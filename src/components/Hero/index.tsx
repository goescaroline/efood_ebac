import { Image } from './styles'
import { useGetCardapioQuery } from '../../services/api'
import { useParams } from 'react-router-dom'

const Hero = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetCardapioQuery(id!)

  if (restaurante) {
    return (
      <Image style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <p>{restaurante.tipo}</p>
          <h2>{restaurante.titulo}</h2>
        </div>
      </Image>
    )
  }
  return <h4>Carregando...</h4>
}

export default Hero
