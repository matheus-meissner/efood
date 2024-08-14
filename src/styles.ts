import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  laranja: '#E66767',
  branca: '#fff',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9',
  preto: '#4B4B4B'
}

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding:0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
    }

    body {
      background-color: ${cores.bege};
      color: ${cores.laranja};
    }
`
export default GlobalStyle

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
