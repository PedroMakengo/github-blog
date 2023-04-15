import styled from 'styled-components'

export const PostContentContainer = styled.div`
  padding: 0 40px;
  transform: translateY(-1.5rem);

  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    line-height: 160%;
  }
`

export const ContentCode = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 1rem;
`
