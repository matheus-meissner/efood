import { Card, Descricao, Titulo, BotaoCarrinho } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const Product = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <BotaoCarrinho>Adicionar ao carrinho</BotaoCarrinho>
  </Card>
)

export default Product
