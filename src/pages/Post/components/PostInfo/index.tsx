import { Link } from 'react-router-dom'
import { PostInfoContainer } from './styles'

export function PostInfo() {
  return (
    <PostInfoContainer className="container">
      <div>
        <Link to="/">Voltar</Link>
        <a href="#">Ver no Github</a>
      </div>
      <h3>JavaScript data types and data structures</h3>
      <div>
        <span>cameronwll</span>
        <span>Há 1 dia</span>
        <span>5 comentários</span>
      </div>
    </PostInfoContainer>
  )
}
