import Button from '../Button'
import {
  Card,
  Descricao,
  Fechar,
  Foto,
  Modal,
  ModalContent,
  NomePrato,
  CardapioContainer
} from './styles'
import fechar from '../../assets/images/fechar.svg'
import { useState } from 'react'
import { CardapioItem, Restaurante } from '../../pages/Home'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  items: CardapioItem[]
  restaurante?: Restaurante
}

interface modalState extends CardapioItem {
  isVisible: boolean
}

export const formatPrice = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
const CardapioCard = ({ items }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(modal!))
    dispatch(open())
    CloseModal()
  }

  const getDescription = (description: string) => {
    if (description.length > 160) {
      return description.slice(0, 157) + '...'
    }
    return description
  }
  const [modal, setModal] = useState<modalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    porcao: '',
    nome: '',
    id: 0,
    preco: 0
  })

  const CloseModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      porcao: '',
      nome: '',
      id: 0,
      preco: 0
    })
  }

  return (
    <>
      <CardapioContainer className="container">
        {items.map((cardapio) => (
          <li key={cardapio.id}>
            <Card>
              <img src={cardapio.foto} />
              <NomePrato>{cardapio.nome}</NomePrato>
              <Descricao>{getDescription(cardapio.descricao)}</Descricao>
              <Button
                type="button"
                size="big"
                title="Clique aqui para ver mais detalhes"
                onClick={() => {
                  setModal({
                    isVisible: true,
                    descricao: cardapio.descricao,
                    foto: cardapio.foto,
                    nome: cardapio.nome,
                    porcao: cardapio.porcao,
                    id: cardapio.id,
                    preco: cardapio.preco
                  })
                }}
              >
                Mais detalhes
              </Button>
            </Card>
          </li>
        ))}
      </CardapioContainer>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent>
          <Foto src={modal.foto} />
          <div>
            <h3>{modal.nome}</h3>
            <Fechar
              onClick={() => {
                CloseModal()
              }}
              src={fechar}
            />
            <p>{modal.descricao}</p>
            <p>
              <span>Serve: {modal.porcao}</span>
            </p>
            <Button
              type="button"
              title="Clique aqui para adicionar este item ao carrinho"
              size="small"
              onClick={addToCart}
            >
              <>Adicionar ao carrinho - {formatPrice(modal.preco)}</>
            </Button>
          </div>
        </ModalContent>
        <div
          className="overlay"
          onClick={() => {
            CloseModal()
          }}
        ></div>
      </Modal>
    </>
  )
}

export default CardapioCard
