import styled from 'styled-components'
import fundoImg from '../../assets/images/fundo.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${fundoImg});

  max-width: 100%;
  height: 384px;
  margin-bottom: 80px;

  div {
    align-items: center;
    text-align: center;

    img {
      margin-top: 34px;
    }
  }
`

export const Title = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 42.19px;
  letter-spacing: 0%;
  text-align: center;
  color: ${cores.vermelho};
  margin-top: 138px;
`
