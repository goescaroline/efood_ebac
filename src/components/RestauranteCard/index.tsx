import { Avaliation, Card, CardTitle, DescriptionCard, Infos } from './styles'
import estrela from '../../assets/images/estrela.png'
import Tag from '../Tag/index'
import Button from '../Button'

type Props = {
  titulo: string
  descricao: string
  avaliacao: number
  capa: string
  tipo: string
  id: number
  infos: string[]
}

const RestauranteCard = ({
  titulo,
  descricao,
  avaliacao,
  capa,
  id,
  infos
}: Props) => {
  return (
    <>
      <div className="container">
        <Card to={`/cardapio/${id}`}>
          <img src={capa} />
          <Infos>
            {infos.map((info) => (
              <Tag key={info}>{info}</Tag>
            ))}
          </Infos>
          <DescriptionCard>
            <CardTitle>
              <p>{titulo}</p>
              <Avaliation>
                <p>{avaliacao}</p>
                <img src={estrela} alt="Estrela" />
              </Avaliation>
            </CardTitle>
            {descricao}
            <Button
              type="link"
              title="Clique aqui para ir para a página do restaurante"
              to={`/cardapio/${id}`}
            >
              Saiba mais
            </Button>
          </DescriptionCard>
        </Card>
      </div>
    </>
  )
}
export default RestauranteCard
