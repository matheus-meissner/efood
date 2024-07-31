import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 8px;
  position: relative;
  margin-bottom: 32px;
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  display: block;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  margin-bottom: 4px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const BotaoCarrinho = styled.button`
  background-color: ${cores.begeEscuro};
  width: 100%;
  color: ${cores.laranja};
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 4px;
  margin-top: 8px;
  cursor: pointer;
`
