import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fetch, FetchApi, form } from '../redux/actions';

function WalletForm() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchApi());
  }, []);
  const { currencies } = useSelector((state) => state.wallet);
  const [formData, setForm] = useState({
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  });
  const handleChange = (
    event :React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = event.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();

        dispatch(Fetch(formData));

        setForm({
          id: formData.id + 1,
          value: 0,
          description: '',
          currency: 'USD',
          method: 'Dinheiro',
          tag: 'Alimentação',
        });
      } }
    >
      <label>
        Despesa :
        <input
          data-testid="value-input"
          name="value"
          required
          type="number"
          value={ formData.value }
          onChange={ handleChange }
        />
      </label>
      <label>
        {' '}
        Descrição da Despesa :
        <input
          data-testid="description-input"
          type="text"
          name="description"
          required
          value={ formData.description }
          onChange={ handleChange }
        />
      </label>
      <select
        data-testid="currency-input"
        onChange={ handleChange }
      >
        {currencies.map((pais:any) => (

          <option key={ pais } value={ pais }>{pais}</option>
        ))}
      </select>
      <select
        data-testid="method-input"
        name="method"
        value={ formData.method }
        onChange={ handleChange }
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de crédito" selected>Cartão de crédito</option>
        <option value="Cartão de débito">Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        name="tag"
        value={ formData.tag }
        onChange={ handleChange }
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer" selected>Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
        onChange
      </select>
      <button
        type="submit"
      >

        Adicionar despesa
      </button>

    </form>
  );
}
export default WalletForm;
