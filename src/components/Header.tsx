import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const { expenses } = useSelector((state) => state.wallet);
  const [despesa, setDespensa] = useState(0);
  const [cambio] = useState('BRL');
  useEffect(() => {
    // const filtrando = expenses.find((testando) => (
    //   testando.currency === testando.exchangeRates.currency));
    // console.log(filtrando);
    const valorfinal = expenses
      .reduce((accumulator:any, currentValue:any) => (
        accumulator + Number(currentValue.exchangeRates[currentValue.currency]), 0));
    setDespensa((valorfinal.toFixed(2)));
  }, [expenses]);
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
