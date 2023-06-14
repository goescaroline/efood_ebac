import Restaurantes from '../../models/Restaurante'
import RestauranteCard from '../RestauranteCard'
import { Lista } from './styles'

type Props = {
  restaurantes: Restaurantes[]
}

const RestauranteLista = ({ restaurantes }: Props) => {
  const getTagRestaurante = (restaurante: Restaurantes) => {
    const tags = []
    if (restaurante.destacado) {
      tags.push('Destaque da semana')
    }
    if (restaurante.tipo) {
      tags.push(restaurante.tipo)
    }
    return tags
  }
  return (
    <div className="container">
      <Lista>
        {restaurantes.map((restaurante) => (
          <li key={restaurante.id}>
            <RestauranteCard
              id={restaurante.id}
              titulo={restaurante.titulo}
              descricao={restaurante.descricao}
              avaliacao={restaurante.avaliacao}
              capa={restaurante.capa}
              infos={getTagRestaurante(restaurante)}
            />
          </li>
        ))}
      </Lista>
    </div>
  )
}
export default RestauranteLista
