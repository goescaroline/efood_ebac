import { Image } from './styles'
import pasta from '../../assets/images/pasta.png'

const Hero = () => {
  return (
    <Image style={{ backgroundImage: `url(${pasta})` }}>
      <div className="container">
        <p>Italiana</p>
        <h2>La Dolce Vita Trattoria</h2>
      </div>
    </Image>
  )
}
export default Hero
