import styled from 'styled-components'
import { cores } from '../../styles'
import backgroundImageHeader from '../../assets/images/background-image.png'

export const HeaderBar = styled.header`
  background-image: url(${backgroundImageHeader});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  padding-top: 52px;
  padding-bottom: 64px;
  width: 100%;

  a {
    color: ${cores.laranja};
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
  }
`
export const LogoHeader = styled.img`
  display: block;
  margin-left: 100px;
`
export const HeaderContain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`
