import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 32px 40px;
  border-radius: 10px;

  transform: translateY(-5rem);
`
