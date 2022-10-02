import * as Dialog from '@radix-ui/react-dialog'

import logoSvg from '../../assets/Logo.svg'
import { NewTransactionsModal } from '../NewTransactionsModal'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSvg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New Transaction</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionsModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
