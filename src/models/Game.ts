class Game {
  description: string
  image: string
  title: string
  id: number
  category: string
  system: string
  infos: string[]

  constructor(
    id: number,
    description: string,
    image: string,
    title: string,
    category: string,
    system: string,
    infos: string[]
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.title = title
    this.category = category
    this.system = system
    this.infos = infos
  }
}

export default Game
