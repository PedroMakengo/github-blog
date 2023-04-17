import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserGroup, faCalendar } from '@fortawesome/free-solid-svg-icons'

import { PostInfoContainer, PostHeader, PostListInfo } from './styles'
import { IPost } from '../../../Home'
import { Spinner } from '../../../../components/Spinner'
import { relativeDateFormatter } from '../../../../utils/formatter'

interface PostInfoProps {
  postData: IPost
  isLoading: boolean
}

export function PostInfo({ postData, isLoading }: PostInfoProps) {
  const formattedDate = relativeDateFormatter(postData?.created_at)
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <PostInfoContainer className="container">
          <PostHeader>
            <Link to="/">Voltar</Link>
            <a href={postData.html_url}>Ver no Github</a>
          </PostHeader>
          <h3>{postData.title}</h3>
          <PostListInfo>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {postData.user.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} />
              {formattedDate}
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {postData.comments} comentários
            </li>
          </PostListInfo>
        </PostInfoContainer>
      )}
    </>
  )
}
