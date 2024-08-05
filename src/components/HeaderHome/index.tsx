import { Link } from 'react-router-dom'
import { HeaderBar, LogoHeader, HeaderContain, TitleHeader } from './styles'
import logo from '../../assets/images/efood-logo.png'

export type Props = {
  page?: 'restaurantes' | 'home'
}

const HeaderHome = ({ page = 'restaurantes' }: Props) => (
  <HeaderBar>
    <HeaderContain>
      <Link to="/">
        <LogoHeader src={logo} alt="EFOOD" />
      </Link>
      <TitleHeader>
        Viva experiências gastronômicas no conforto da sua casa
      </TitleHeader>
    </HeaderContain>
  </HeaderBar>
)

export default HeaderHome
