import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as S from './styles'
import * as Dialog from '@radix-ui/react-dialog'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.DialogOverlay>
        <S.DialogContent>
          <Dialog.Title>Nova Transação</Dialog.Title>
          <S.DialogCloseButton>
            <X size={24} />
          </S.DialogCloseButton>

          <form action="">
            <input type="text" placeholder="Descrição" required />
            <input type="number" placeholder="Preço" required />
            <input type="text" placeholder="Categoria" required />

            <S.RadioGroupRoot>
              <S.RadioGroupItem variant="income" value="income">
                <ArrowCircleUp size={24} />
                Entrada
              </S.RadioGroupItem>
              <S.RadioGroupItem variant="outcome" value="outcome">
                <ArrowCircleDown size={24} />
                Saída
              </S.RadioGroupItem>
            </S.RadioGroupRoot>

            <button type="submit">Cadastrar</button>
          </form>
        </S.DialogContent>
      </S.DialogOverlay>
    </Dialog.Portal>
  )
}
