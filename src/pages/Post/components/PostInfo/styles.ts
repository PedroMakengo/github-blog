import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 32px 40px;
  border-radius: 10px;

  transform: translateY(-5rem);

  h3 {
    font-size: 24px;
    margin-block: 1rem;
    color: ${(props) => props.theme['white']};
  }
`

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: ${(props) => props.theme['blue']};
    text-decoration: none;
  }
`

export const PostListInfo = styled.div`
  display: flex;
  gap: 2rem;

  span {
    color: ${(props) => props.theme['base-span']};
  }
`
