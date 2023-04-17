import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const PostContainer = styled(Link)`
  width: 49%;
  background: ${(props) => props.theme['base-post']};
  padding: 32px;
  height: 16.25rem;

  border-radius: 10px;
  color: ${(props) => props.theme['base-label']};
  text-decoration: none;

  p {
    color: ${(props) => props.theme['base-text']};
    font-family: 'Nunito';
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`

export const HeaderPost = styled.div`
  display: grid;
  grid-template-columns: 1fr 20%;
  margin-bottom: 1rem;

  h2 {
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  span {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    font-size: 12px;
  }
`
