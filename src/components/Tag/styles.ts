import styled from 'styled-components'
import { cores } from '../../styles'
import { PropsTag } from '.'

export const TagContainer = styled.div<PropsTag>`
  background-color: ${cores.laranja};
  color: ${cores.begeEscuro};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '10px')};
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
  position: absolute;
  margin-left: 70%;
  margin-top: 16px;
  margin-right: 8px;
`
