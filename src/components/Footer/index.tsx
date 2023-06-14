import { FooterSection, ListaLinksMedia } from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.svg'
import { Logo } from '../../styles'

const Footer = () => (
  <FooterSection>
    <Logo src={logo} alt="Logo Efood" />
    <ListaLinksMedia>
      <li>
        <a href="#">
          <img src={instagram} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={facebook} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twitter} />
        </a>
      </li>
    </ListaLinksMedia>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade <br /> dos produtos é toda do
      estabelecimento contratado.{' '}
    </p>
  </FooterSection>
)
export default Footer
