import Game from '../../models/Game'
import ProductHome from '../ProductHome'
import { List, Container } from './styles'

export type Props = {
  title: string
  games: Game[]
}

const ProductsListHome = ({ title, games }: Props) => (
  <Container>
    <div className="container">
      <List>
        {games.map((game) => (
          <ProductHome
            key={game.id}
            description={game.description}
            image={game.image}
            title={game.title}
            infos={game.infos}
            rating={game.rating}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsListHome
