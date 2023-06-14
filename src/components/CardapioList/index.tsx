import { Card, CardapioContainer, Descricao, NomePrato } from './styles'
import Button from '../Button'
import pizza from '../../assets/images/pizza.png'

const CardapioList = () => {
  return (
    <CardapioContainer className="container">
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
      <Card>
        <img src={pizza} />
        <NomePrato>Pizza Marguerita</NomePrato>
        <Descricao>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Descricao>
        <Button
          size="big"
          title="Clique aqui para adicionar ao carrinho"
          type="button"
        >
          Mais detalhes
        </Button>
      </Card>
    </CardapioContainer>
  )
}
export default CardapioList
