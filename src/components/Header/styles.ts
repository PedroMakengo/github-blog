import styled from 'styled-components'

import CoverImg from '../../assets/cover.svg'

export const HeaderContainer = styled.header`
  background-image: url(${CoverImg});
  background-repeat: no-repeat;
  background-position: center;
  height: 296px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 65px;

  img {
    width: 10%;
  }

  @media (max-width: 760px) {
    height: 210px;
    padding-top: 35px;
    img {
      width: 30%;
    }
  }
`
