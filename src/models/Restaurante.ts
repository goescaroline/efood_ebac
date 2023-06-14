export class Restaurantes {
  titulo: string
  descricao: string
  capa: string
  avaliacao: number
  destacado?: boolean
  tipo: string
  cardapio: string[]
  id: number

  constructor(
    id: number,
    cardapio: string[],
    capa: string,
    descricao: string,
    titulo: string,
    avaliacao: number,
    tipo: string,
    destacado: boolean
  ) {
    this.id = id
    this.cardapio = cardapio
    this.tipo = tipo
    this.destacado = destacado
    this.capa = capa
    this.descricao = descricao
    this.titulo = titulo
    this.avaliacao = avaliacao
  }
}
export default Restaurantes
