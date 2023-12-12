import { useSelector, useDispatch } from 'react-redux';
import { form2 } from '../redux/actions';

function Table() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  const removerIte = (index: number) => {
    const novaLista = [...expenses];
    novaLista.splice(index, 1);
    dispatch(form2(novaLista));
  };

  return (
    <table>
      <thead>
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
      </thead>
      <tbody>
        {expenses.map((despesas:any, index:any) => (
          <tr key={ despesas.id }>
            <td>{despesas.description}</td>
            <td>{despesas.tag}</td>
            <td>{despesas.method}</td>
            <td>{Number(despesas.value).toFixed(2)}</td>
            <td>
              {despesas.exchangeRates[despesas.currency].name}
            </td>
            <td>{(+despesas.exchangeRates[despesas.currency].ask).toFixed(2)}</td>
            <td>
              {(despesas.exchangeRates[despesas.currency].ask
                * despesas.value).toFixed(2)}
              {' '}
            </td>
            <td>
              Real
            </td>
            <td>
              <button
                data-testid="delete-btn"
                onClick={ () => removerIte(index) }
              >
                Excluir
              </button>

            </td>
          </tr>))}
      </tbody>
    </table>

  );
}
export default Table;
