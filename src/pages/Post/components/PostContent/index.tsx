import { PostContentContainer, ContentCode } from './styles'
import ReactMarkdown from 'react-markdown'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer className="container">
      <ReactMarkdown children={content} />
    </PostContentContainer>
  )
}
