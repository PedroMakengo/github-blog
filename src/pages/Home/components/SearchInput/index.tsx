import { SearchInputContainer, ContentSearch } from './styles'

export function SearchInput() {
  return (
    <SearchInputContainer action="">
      <ContentSearch>
        <span>Publicações</span>
        <span>6 publicações</span>
      </ContentSearch>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchInputContainer>
  )
}
