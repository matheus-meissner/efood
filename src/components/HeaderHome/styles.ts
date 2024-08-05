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
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
  height: 384px;
`
export const LogoHeader = styled.img`
  display: block;
  margin-bottom: 138px;
`
export const HeaderContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const TitleHeader = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${cores.laranja};
  line-height: 42.19px;
  width: 600px;
`
