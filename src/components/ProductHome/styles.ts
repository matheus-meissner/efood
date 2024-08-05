import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  color: ${cores.laranja};
  position: relative;
  margin-bottom: 48px;
  border: 1px solid ${cores.laranja};

  img {
    width: 100%;
  }
`

export const Conteudo = styled.div`
  padding: 0px 8px 8px 8px;
`

export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  display: block;
  margin-top: 2px;
`

export const Descricao = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;

  span {
    background-color: ${cores.laranja};
    color: ${cores.begeEscuro};
    font-size: 12px;
    padding: 6px;
  }
`

export const BotaoSaibaMais = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.begeEscuro};
  width: 18%;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.41px;
  text-align: center;
  padding: 4px 6px;
  cursor: pointer;
`
