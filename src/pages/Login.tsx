import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { atualizar } from '../redux/actions';

function Login() {
  const [formData, setForm] = useState({
    email: '',
    senha: '',

  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event :React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({
      ...formData,
      [name]: value,
    });
  };
  const senhaverificar = formData.senha.length >= 6;
  const email = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
  const validadeEmail = email.test(formData.email);
  const verificar = validadeEmail && senhaverificar;

  return (

    <form
      onSubmit={ (e) => {
        e.preventDefault();
        dispatch(atualizar(formData.email));
        navigate('/carteira');
      } }
    >
      <label>
        Email :
        <input
          data-testid="email-input"
          type="email"
          name="email"
          value={ formData.email }
          onChange={ handleChange }
          required
        />
      </label>
      <label>
        {' '}
        Senha :
        <input
          data-testid="password-input"
          type="password"
          name="senha"
          value={ formData.senha }
          onChange={ handleChange }
          required
        />
      </label>
      <button
        disabled={ !verificar }
        type="submit"
      >
        Entrar
      </button>

    </form>

  );
}

export default Login;
