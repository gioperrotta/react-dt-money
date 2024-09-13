import * as S from './styels'

import logoImg from '@/assets/logo.svg'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />
        <S.NewTransactionButton>Nova Transação</S.NewTransactionButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
