import styled from 'styled-components'
import { cores } from '../../styles'

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 21px;
  color: #ffbf00; // Cor da estrela (amarelo)
  /* background-color: white; */
  /* padding: 5px 10px; */
  /* border-radius: 15px; */
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
  position: absolute;
  top: 223px;
  left: 410px;
`

export const RatingValue = styled.span`
  margin-right: 5px;
  color: ${cores.laranja};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 21.09px;
`
