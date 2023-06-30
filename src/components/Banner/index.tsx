import { Image } from './styles'

import vector from '../../assets/images/Vector.svg'
import logo from '../../assets/images/logo.svg'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${vector})` }}>
    <div className="container">
      <img src={logo} />
      <h2>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </h2>
    </div>
  </Image>
)

export default Banner
