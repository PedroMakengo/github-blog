import styled from 'styled-components'

export const PostContentContainer = styled.section`
  padding: 2.5rem 2rem;
  transform: translateY(-1.5rem);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['blue']};
  }

  img {
    width: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue']};
  }

  @media (max-width: 760px) {
    padding: 1.5rem;
  }
`
