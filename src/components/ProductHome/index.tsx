import { Card, Descricao, Titulo, BotaoSaibaMais, Conteudo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductHome: React.FC<Props> = ({ title, description, image }) => (
  <Card>
    <img src={image} alt={title} />
    <Conteudo>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <BotaoSaibaMais>Saiba Mais</BotaoSaibaMais>
    </Conteudo>
  </Card>
)

export default ProductHome
