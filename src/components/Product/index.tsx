import { Card, Descricao, Titulo, BotaoCarrinho, Infos } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  showTags?: boolean
}

const Product = ({
  title,
  description,
  image,
  infos,
  showTags = true
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    {showTags && (
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    )}
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <BotaoCarrinho>Adicionar ao carrinho</BotaoCarrinho>
  </Card>
)

export default Product
