import { Header } from '@/components/Header'
import { Summary } from '@/components/Summary'

import * as S from './styles'
import { SearchForm } from './components/SearchForm'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <S.TransactionsContainer>
        <SearchForm />
        <S.TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desnvolvimento de site</td>
              <td>
                <S.PriceHighLight variant="income">
                  R$ 12.000,00
                </S.PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desnvolvimento de site</td>
              <td>
                <S.PriceHighLight variant="outcome">
                  - R$ 59,00
                </S.PriceHighLight>
              </td>
              <td>Alimnetação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  )
}
