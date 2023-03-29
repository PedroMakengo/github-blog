import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const CardContainer = styled(Link)`
  background: ${(props) => props.theme['base-post']};
  padding: 32px;

  border-radius: 10px;
  color: ${(props) => props.theme['base-label']};
  text-decoration: none;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const HeaderCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  margin-bottom: 1rem;

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 12px;
  }
`
