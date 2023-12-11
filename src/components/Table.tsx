import { useSelector } from 'react-redux';

function Table() {
  const { expenses } = useSelector((state) => state.wallet);

  return (
    <table>
      <tr>
        <th>
          Descrição
        </th>
        <th>
          Tag
        </th>
        <th>
          Método de pagamento
        </th>
        <th>
          Valor
        </th>
        <th>
          Moeda
        </th>
        <th>
          Câmbio utilizado
        </th>
        <th>
          Valor convertido
        </th>
        <th>
          Moeda de conversão
        </th>
        <th>
          Editar/Excluir
        </th>
      </tr>
      {expenses.map((despesas:any, index:any) => (
        <tr key={ index }>
          <td>{despesas.description}</td>
          <td>{despesas.tag}</td>
          <td>{despesas.method}</td>
          <td>{despesas.value}</td>
          <td>
            {despesas.exchangeRates[despesas.currency].name}
          </td>
          <td>{despesas.currency}</td>
          <td>{despesas.exchangeRates[despesas.currency].ask}</td>
          <td>
            Real
          </td>
        </tr>))}
    </table>

  );
}
export default Table;
