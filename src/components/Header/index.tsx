import logoSvg from "../../assets/Logo.svg"

import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <NewTransactionButton>New Transaction</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
