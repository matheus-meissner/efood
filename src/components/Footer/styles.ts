import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.begeEscuro};
  padding: 32px 0;
  margin-top: 64px;
  text-align: center;
`

export const FooterSection = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.div`
  margin-bottom: 16px;
`

export const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

export const SocialLinkItem = styled.li`
  margin: 0 8px;
`

export const Link = styled.a`
  color: ${cores.cinzaClaro};
  text-decoration: none;
`

export const DescricaoFooter = styled.p`
  margin: 0 auto;
  width: 480px;
  height: 24px;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  margin-bottom: 8px;
`
