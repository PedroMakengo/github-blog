import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  input {
    width: 100%;
    padding: 12px 16px;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    margin-top: 12px;

    &::placeholder {
      font-family: 'Nunito';
      font-weight: 400;
      font-size: 16px;
      line-height: 160%;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const ContentSearch = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  margin-top: 48px;
`
