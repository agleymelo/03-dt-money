import { MagnifyingGlass } from "phosphor-react"

import { SearchFormContainer } from "./styles"

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transaction" />

      <button type="submit">
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}
