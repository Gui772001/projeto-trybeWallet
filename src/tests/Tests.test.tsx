import { screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';
import Header from '../components/Header';

describe('Teste se a um formulario do tipo email', () => {
  it('teste', async () => {
    renderWithRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    expect(email).toBeInTheDocument();
  });
});

describe('Teste se a um formulario do tipo senha', () => {
  it('teste', async () => {
    renderWithRouterAndRedux(<App />);
    const senha4 = screen.getByTestId('password-input');
    expect(senha4).toBeInTheDocument();
  });
});
describe('Teste se apertar o botão entrar transfere para carteiras', () => {
  it('teste', async () => {
    renderWithRouterAndRedux(<App />);
    const email1 = screen.getByTestId('email-input');
    const senha1 = screen.getByTestId('password-input');
    await userEvent.type(email1, 'tryber@teste.com');
    await userEvent.type(senha1, '1234567');
    const homeLink = screen.getByRole('button', { name: 'Entrar' });
    expect(homeLink).toBeEnabled();
    await userEvent.click(homeLink);
    const con = screen.getByTestId('email-field');
    expect(con).toBeInTheDocument();
    expect(con).toHaveTextContent('tryber@teste.com');
  });
});
describe('Teste se a BRL sempre está na tela', () => {
  it('teste', async () => {
    renderWithRouterAndRedux(<Header />);
    const heading = screen.getByText(/BRL/i);
    expect(heading).toBeInTheDocument();
  });
});
