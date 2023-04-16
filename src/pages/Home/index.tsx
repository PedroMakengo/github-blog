import { useState, useCallback, useEffect } from 'react'

import { Profile } from '../../components/Profile'
import { Post } from './components/Post'
import { SearchInput } from './components/SearchInput'
import { CardContainer } from './components/SearchInput/styles'
import { api } from '../../lib/axios'
import { Spinner } from '../../components/Spinner'

const username = import.meta.env.VITE_GITHUB
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost {
  title: string
  body: string
  created_at: string
  number: number
  html_url: string
  comments: number
  user: {
    login: string
  }
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getPosts = useCallback(
    async (query: string = '') => {
      try {
        setIsLoading(true)
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        )

        setPosts(response.data.items)
      } finally {
        setIsLoading(false)
      }
    },
    [posts]
  )

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <Profile />

          <SearchInput postsLength={posts.length} getPosts={getPosts} />

          <CardContainer>
            {posts.map((post) => {
              return <Post key={post.number} post={post} />
            })}
          </CardContainer>
        </div>
      )}
    </>
  )
}
