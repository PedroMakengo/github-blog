import { useCallback, useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  AvatarContent,
  AvatarUser,
  HeaderContent,
  InfoGithub,
  ProfileContainer,
} from './styles'

import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { api } from '../../lib/axios'
import { Spinner } from '../Spinner'

// const username = import.meta.env.VITE_GITHUB_USERNAME
const username = 'pedromakengo'

interface ProfileData {
  login: string
  bio: string
  avatar_url: string
  html_url: string
  name: string
  company?: string
  followers: number
}

export function Profile() {
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)
  const [isLoading, setIsLoading] = useState(true)

  const getProfileData = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get(`/users/${username}`)
      setProfileData(response.data)
    } finally {
      setIsLoading(false)
    }
  }, [profileData])

  useEffect(() => {
    getProfileData()
  }, [])

  return (
    <ProfileContainer className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <AvatarUser>
            <img src={profileData.avatar_url} alt="" />
          </AvatarUser>

          <AvatarContent>
            <HeaderContent>
              <h1>{profileData.name}</h1>
              <a href={profileData.html_url} target="_blank">
                Github
              </a>
            </HeaderContent>
            <p>{profileData.bio}</p>

            <InfoGithub>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                {profileData.login}
              </li>
              {profileData?.company && (
                <li>
                  <FontAwesomeIcon icon={faBuilding} />
                  Ellonet
                </li>
              )}

              <li>
                <FontAwesomeIcon icon={faUserGroup} />
                {profileData.followers} seguidores
              </li>
            </InfoGithub>
          </AvatarContent>
        </>
      )}
    </ProfileContainer>
  )
}
