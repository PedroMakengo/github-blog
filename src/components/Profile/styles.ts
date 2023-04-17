import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 32px 40px;

  border-radius: 10px;

  display: grid;
  grid-template-columns: 148px 1fr;
  gap: 32px;

  position: relative;
  transform: translateY(-5rem);
`

export const AvatarUser = styled.div`
  width: 100%;
  height: 148px;

  img {
    width: 100%;
    height: 100%;

    border-radius: 6px;
  }
`

export const AvatarContent = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  padding-block: 0.75rem;

  p {
    color: ${(props) => props.theme['base-text']};
    margin: 8px 0 24px 0;
    font-size: 1rem;
    line-height: 160%;
  }
`

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme.white};
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
  }
`

export const InfoGithub = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    color: ${(props) => props.theme['base-subtitle']};
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme['base-label']};
    }
  }
`
