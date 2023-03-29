import { CardContainer, HeaderCard } from './styles'

export function Card() {
  return (
    <CardContainer to="/post">
      <HeaderCard>
        <h2>JavaScript data types and data structures</h2>
        <span>Há 1 dia</span>
      </HeaderCard>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in
      </p>
    </CardContainer>
  )
}
