import vector from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'
import { HeaderBar, Logo } from './styles'
import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${vector})` }}>
    <Logo>
      <Link to="/">
        <img src={logo} />
      </Link>
    </Logo>
    <div className="container">
      <p>Restaurantes</p>

      <a href="#">
        <span>0</span>produto(s) no carrinho
      </a>
    </div>
  </HeaderBar>
)

export default Header
