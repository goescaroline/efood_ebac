import Banner from '../../components/Banner'
import RestauranteLista from '../../components/RestauranteLista'
import Restaurantes from '../../models/Restaurante'

const restaurantes: Restaurantes[] = [
  {
    id: 1,
    titulo: 'Bella Tavola Italiana',
    destacado: true,
    tipo: 'italiana',
    avaliacao: 4.7,
    descricao:
      'A paixão dos nossos talentosos chefs pela cozinha italiana é evidente em cada prato, desde massas caseiras e risotos cremosos até suculentos frutos do mar e carnes tenras. Nosso menu é complementado por uma excelente carta de vinhos, cuidadosamente selecionados para harmonizar com a riqueza dos sabores italianos.',
    capa: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//capa.jpeg',
    cardapio: []
  },
  {
    id: 2,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'árabe',
    avaliacao: 4.8,
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    capa: 'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    cardapio: []
  },
  {
    id: 3,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'árabe',
    avaliacao: 4.8,
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    capa: 'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    cardapio: []
  },
  {
    id: 4,
    titulo: 'Casa das Delícias Árabes',
    destacado: false,
    tipo: 'árabe',
    avaliacao: 4.8,
    descricao:
      'A Casa das Delícias Árabes é um acolhedor e autêntico restaurante árabe, localizado no coração da cidade, que proporciona uma verdadeira experiência culinária do Oriente Médio. O ambiente é decorado com elementos tradicionais e exóticos, criando uma atmosfera convidativa e confortável.',
    capa: 'https://fake-api-tau.vercel.app/efood/casa_delicias_arabes//capa.jpeg',
    cardapio: []
  }
]

const Home = () => {
  return (
    <>
      <Banner />
      <RestauranteLista restaurantes={restaurantes} />
    </>
  )
}
export default Home
