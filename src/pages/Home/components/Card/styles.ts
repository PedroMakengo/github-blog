import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 32px;

  border-radius: 10px;
`

export const HeaderCard = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 1rem;

  h2 {
    font-size: 20px;
  }
`
