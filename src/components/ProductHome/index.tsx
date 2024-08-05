import {
  Card,
  Descricao,
  Titulo,
  BotaoSaibaMais,
  Conteudo,
  Infos
} from './styles'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
}

const ProductHome: React.FC<Props> = ({ title, description, image, infos }) => (
  <Card>
    <img src={image} alt={title} />
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
