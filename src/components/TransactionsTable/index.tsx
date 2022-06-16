import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                R$ {transaction.amount.toFixed(2).replace('.', ',')}
              </td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString("pt-BR")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}