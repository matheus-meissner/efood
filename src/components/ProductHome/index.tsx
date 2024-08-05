import {
  Card,
  Descricao,
  Titulo,
  BotaoSaibaMais,
  Conteudo,
  Infos
} from './styles'

import Rating from '../Rating'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
}

const ProductHome: React.FC<Props> = ({
  title,
  description,
  image,
  infos,
  rating
}) => (
  <Card>
    <img src={image} alt={title} />
    <Rating value={rating} />
    <Conteudo>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <Infos>
        {infos.map((info, index) => (
          <span key={index}>{info}</span>
        ))}
      </Infos>
      <BotaoSaibaMais>Saiba Mais</BotaoSaibaMais>
    </Conteudo>
  </Card>
)

export default ProductHome
