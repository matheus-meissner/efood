import { Card, Descricao, Titulo, BotaoCarrinho, Infos } from './styles'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  image: string
  category: string
  system: string
  infos: string[]
}

const Product = ({
  title,
  description,
  image,
  category,
  system,
  infos
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Tag>{system}</Tag>
    <Descricao>{description}</Descricao>
    <BotaoCarrinho>Adicionar ao carrinho</BotaoCarrinho>
  </Card>
)

export default Product
