import Game from '../../models/Game'
import Product from '../Product'
import { List, Container } from './styles'

export type Props = {
  title: string
  games: Game[]
}

const ProductsList = ({ title, games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <Product
            key={game.id}
            description={game.description}
            image={game.image}
            title={game.title}
            category={game.category}
            system={game.system}
            infos={game.infos}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
