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
  showTags?: boolean
}

const ProductHome: React.FC<Props> = ({
  title,
  description,
  image,
  infos,
  rating,
  showTags
}) => (
  <Card>
    <img src={image} alt={title} />
    <Rating value={rating} />
    <Conteudo>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      {showTags && (
        <Infos>
          {infos.map((info, index) => (
            <span key={index}>{info}</span>
          ))}
        </Infos>
      )}
      <BotaoSaibaMais>Saiba Mais</BotaoSaibaMais>
    </Conteudo>
  </Card>
)

export default ProductHome
