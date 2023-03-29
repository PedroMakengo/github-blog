import {
  AvatarContent,
  AvatarUser,
  HeaderContent,
  InfoGithub,
  ProfileContainer,
} from './styles'

import avatarImg from '../../assets/avatar.svg'

export function Profile() {
  return (
    <ProfileContainer className="container">
      <AvatarUser>
        <img src={avatarImg} alt="" />
      </AvatarUser>

      <AvatarContent>
        <HeaderContent>
          <h1>Cameron Williamson</h1>
          <a href="">Github</a>
        </HeaderContent>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <InfoGithub>
          <a href="#">cameronwll</a>
          <a href="#">Rocketseat</a>
          <a href="#">32 seguidores</a>
        </InfoGithub>
      </AvatarContent>
    </ProfileContainer>
  )
}
