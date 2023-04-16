import { IPost } from '../..'
import { relativeDateFormatter } from '../../../../utils/formatter'
import { PostContainer, HeaderPost } from './styles'

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at)
  return (
    <PostContainer to={`/post/${post.number}`}>
      <HeaderPost>
        <h2>{post.title}</h2>
        <span>{formattedDate}</span>
      </HeaderPost>
      <p>{post.body}</p>
    </PostContainer>
  )
}
