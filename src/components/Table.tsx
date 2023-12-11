import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

function Table() {
  const { expanses } = useSelector((state) => state.wallet);

  return (

    <table>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
      {' '}
      {expanses.map((valores :any) => (
        <table key={ nanoid() }>
          <th>{valores}</th>
          <th>valores</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Moeda de conversão</th>
        </table>

      ))}
    </table>

  );
}
export default Table;
