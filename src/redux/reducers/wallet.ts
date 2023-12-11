import { AnyAction } from 'redux';
import { ADD_API, ADD_FORM } from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const wallet = (state = INITIAL_STATE, action:AnyAction) => {
  switch (action.type) {
    case ADD_API:
      return {
        ...state,
        currencies: Object.keys(action.payload),

      };
    case ADD_FORM:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        idToEdit: action.payload.id,

      };

    default:
      return state;
  }
};

export default wallet;
