import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import api from '../../components/Api';

export const ADD_EMAIL = 'ADD_EMAIL';

export const atualizar = (e:string) => ({
  type: ADD_EMAIL,
  payload: e,
});
export type Dispatch = ThunkDispatch<any, null, AnyAction>;

export const ADD_API = 'ADD_API';
export const ADD_FORM = 'ADD_FORM';
export const ADD_ARRAY = 'ADD_ARRAY';

export const array = (data: any) => ({
  type: ADD_API,
  payload: data,
});
export const form = (data: any) => ({
  type: ADD_FORM,
  payload: data,
});

export const FetchApi = () => {
  return async (dispatch:Dispatch) => {
    try {
      const response = await api();
      delete response.USDT;
      dispatch(array(response));
    } catch (e) {
      console.error(e);
    }
  };
};
export const Fetch = (formdata) => {
  return async (dispatch:Dispatch) => {
    try {
      const response = await api();
      const exchangeRates = {
        exchangeRates: response,
        ...formdata };
      dispatch(form(exchangeRates));
    } catch (e) {
      console.error(e);
    }
  };
};
export const form2 = (data: any) => ({
  type: ADD_ARRAY,
  payload: data,
});
