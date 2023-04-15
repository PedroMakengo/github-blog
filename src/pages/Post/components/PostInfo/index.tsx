import { Link } from 'react-router-dom'
import { PostInfoContainer, PostHeader, PostListInfo } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer className="container">
      <PostHeader>
        <Link to="/">Voltar</Link>
        <a href="#">Ver no Github</a>
      </PostHeader>
      <h3>JavaScript data types and data structures</h3>
      <PostListInfo>
        <span>cameronwll</span>
        <span>Há 1 dia</span>
        <span>5 comentários</span>
      </PostListInfo>
    </PostInfoContainer>
  )
}
