import { Profile } from '../../components/Profile'
import { SearchInput } from './components/SearchInput'

export function Home() {
  return (
    <div className="container">
      <Profile />
      <SearchInput />
    </div>
  )
}
