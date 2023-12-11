import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const valor = useSelector((state) => state.wallet.expenses);
  const [despesa] = useState(0);
  const [cambio] = useState('BRL');
  const dispensa = valor.map((valo: any) => {
    return valo;
  });
  console.log(valor);
  console.log(dispensa.value);

  const { email } = useSelector((state) => state.user);
  return (
    <ul>
      <li data-testid="email-field">
        {email}
      </li>
      <li data-testid="total-field">
        {despesa}

      </li>
      <li data-testid="header-currency-field">

        {cambio}
      </li>

    </ul>

  );
}

export default Header;
