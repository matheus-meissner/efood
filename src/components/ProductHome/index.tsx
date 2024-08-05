import {
  Card,
  Descricao,
  Titulo,
  BotaoSaibaMais,
  Conteudo,
  Infos
} from './styles'

import Rating from '../Rating'
import { useNavigate } from 'react-router-dom'

type Props = {
  title: string
  description: string
  image: string
  infos: string[]
  rating: number
  link?: string
}

const ProductHome: React.FC<Props> = ({
  title,
  description,
  image,
  infos,
  rating,
  link
}) => {
  const navigate = useNavigate()

  const handleSaibaMaisClick = () => {
    if (link) {
      navigate(link)
    }
  }

  return (
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
        <BotaoSaibaMais onClick={handleSaibaMaisClick}>
          Saiba Mais
        </BotaoSaibaMais>
      </Conteudo>
    </Card>
  )
}

export default ProductHome
