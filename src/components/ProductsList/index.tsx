import Game from '../../models/Game'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  title: string
  games: Game[]
  showTags?: boolean
}

const ProductsList = ({ title, games, showTags = true }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            title={game.title}
            infos={game.infos}
            showTags={showTags}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
