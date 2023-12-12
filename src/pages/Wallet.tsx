import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

function Wallet() {
  const variavel = useLocation();
  console.log(variavel);
  return (
    <>
      <Header />
      <WalletForm />
      <Table />
    </>
  );
}

export default Wallet;
