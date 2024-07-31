import { Imagem, Precos, Textos, Titulo } from './styles'
import bannerImg from '../../assets/images/macarrao.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="containerBanner">
      <div className="container">
        <Textos>
          <Titulo>Italiana</Titulo>
          <div>
            <Precos>La Dolce Vita Trattoria</Precos>
          </div>
        </Textos>
      </div>
    </div>
  </Imagem>
)

export default Banner
