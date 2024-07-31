import { Link } from 'react-router-dom'
import { HeaderBar, LogoHeader, HeaderContain } from './styles'
import logo from '../../assets/images/efood-logo.png'

export type Props = {
  page?: 'restaurantes' | 'home'
}

const Header = ({ page = 'restaurantes' }: Props) => (
  <HeaderBar>
    <HeaderContain>
      <ul>
        <li>
          <Link to="/">Restaurantes</Link>
        </li>
      </ul>
      <Link to="/">
        <LogoHeader src={logo} alt="EFOOD" />
      </Link>
      <Link to="/">0 produto(s) no carrinho</Link>
    </HeaderContain>
  </HeaderBar>
)

export default Header
