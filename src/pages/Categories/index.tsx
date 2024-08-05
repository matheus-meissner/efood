import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import pizza from '../../assets/images/pizza.png'
import Banner from '../../components/Banner'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    category: 'test',
    system: 'test',
    infos: []
  }
]

const Categories = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="RPG" />
  </>
)

export default Categories
