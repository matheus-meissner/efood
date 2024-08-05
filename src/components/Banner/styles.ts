import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  display: block;
  width: 100%;
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15%;
  font-weight: bold;
  position: relative;

  .containerBanner {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const Textos = styled.div`
  font-size: 32px;
  line-height: 38px;
  color: ${cores.branca};
`

export const Titulo = styled.h2`
  font-weight: 100;
  margin-bottom: 160px;
  font-size: 32px;
`

export const Precos = styled.p`
  font-weight: 700;

  span {
    text-decoration: line-through;
  }
`
