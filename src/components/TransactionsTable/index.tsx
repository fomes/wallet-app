import { Container } from "./styles"

export function TransactionsTable() {
  return(
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
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$ 10.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/05/2022</td>
          </tr>

          <tr>
            <td>Alugel</td>
            <td className="withdraw">R$ 1.000,00</td>
            <td>Casa</td>
            <td>17/05/2022</td>
          </tr>

        </tbody>
      </table>
    </Container>
  )
}
