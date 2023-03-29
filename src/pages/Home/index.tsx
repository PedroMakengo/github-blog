import { Profile } from '../../components/Profile'
import { Card } from './components/Card'
import { SearchInput } from './components/SearchInput'
import { CardContainer } from './components/SearchInput/styles'

const cards = [1, 2, 3, 4, 1, 3, 2]

export function Home() {
  return (
    <div className="container">
      <Profile />
      <SearchInput />
      <CardContainer>
        {cards.map((card, index) => {
          return <Card key={index} />
        })}
      </CardContainer>
    </div>
  )
}
