import {
  Container,
  DescricaoFooter,
  FooterSection,
  Link,
  Logo,
  SocialLinks,
  SocialLinkItem
} from './styles'
import logo from '../../assets/images/efood-logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1.png'
import face from '../../assets/images/Vector.png'
import twitter from '../../assets/images/Group.png'

const Footer = () => (
  <Container>
    <FooterSection>
      <Logo>
        <img src={logo} alt="EFOOD" />
      </Logo>
      <SocialLinks>
        <SocialLinkItem>
          <Link>
            <img src={insta} alt="Logo Instagram" />
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <img src={face} alt="Logo Facebook" />
          </Link>
        </SocialLinkItem>
        <SocialLinkItem>
          <Link>
            <img src={twitter} alt="Logo Twitter" />
          </Link>
        </SocialLinkItem>
      </SocialLinks>
    </FooterSection>
    <DescricaoFooter>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </DescricaoFooter>
  </Container>
)

export default Footer
