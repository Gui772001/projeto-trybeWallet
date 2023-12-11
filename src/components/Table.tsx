import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

function Table() {
  const { expenses } = useSelector((state) => state.wallet);
  console.log(expenses);

  return (
    <header>

      {' '}
      {expenses.map((valores :any) => (
        <tr key={ nanoid() }>
          <td>
            Descrição
            {valores.description}

          </td>
          <td>
            {' '}
            Tag
            {valores.tag}
          </td>
          <td>
            Método de pagamento
            {valores.method}
          </td>
          <td>
            Valor
            {' '}
            {valores.value}
          </td>
          <td>
            Moeda
            {' '}
            {`${valores.exchangeRates.name}/Real Brasileiro` }
          </td>
          <td>
            Câmbio utilizade
            {valores.currency}
          </td>
          <td>
            Moeda de conversão
            {' '}
            {valores.exchangeRates.ask}
          </td>
        </tr>
      ))}
    </header>

  );
}
export default Table;
