class Game {
  description: string
  image: string
  title: string
  id: number
  infos: string[]
  rating: number

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    infos: string[],
    rating: number
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.infos = infos
    this.rating = rating
  }
}

export default Game
