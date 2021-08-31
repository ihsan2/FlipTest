import axios from 'axios';

export const getTranscations = ({refreshing = false} = {}) => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_TRANSACTIONS_START', refreshing});

    dispatch({
      type: 'SEARCH_TRANSACTIONS_SUCCESS',
      search: '',
    });
    dispatch({
      type: 'SORT_TRANSACTIONS_SUCCESS',
      sort: {
        label: 'URUTKAN',
        value: '',
      },
    });

    return axios
      .get('https://nextar.flip.id/frontend-test', {
        headers: {
          Accept: 'application/json',
        },
      })
      .then(resp => {
        let result = Object.values(resp.data);
        dispatch({
          type: 'GET_TRANSACTIONS_SUCCESS',
          data: result,
          all: result,
        });
        return result;
      })
      .catch(err => {
        console.log(err);
        dispatch({type: 'GET_TRANSACTIONS_FAIL'});
      });
  };
};

export const searchTransactions = text => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_TRANSACTIONS_START'});

    const {all} = getState().transactionState;
    let result = all.filter(
      item =>
        item.beneficiary_name.toLowerCase().match(text.toLowerCase()) ||
        item.beneficiary_bank.toLowerCase().match(text.toLowerCase()) ||
        item.sender_bank.toLowerCase().match(text.toLowerCase()) ||
        item.amount.toString().match(text.toLowerCase()),
    );

    dispatch({
      type: 'SEARCH_TRANSACTIONS_SUCCESS',
      search: text,
    });

    dispatch({
      type: 'GET_TRANSACTIONS_SUCCESS',
      data: result,
      all: all,
    });
  };
};

export const sortTransactions = sort => {
  return (dispatch, getState) => {
    dispatch({type: 'GET_TRANSACTIONS_START'});

    const {transactions, all} = getState().transactionState;

    let result = transactions.sort((a, b) => {
      if (sort?.value === 'name|asc') {
        if (b.beneficiary_name < a.beneficiary_name) return 1;
        if (b.beneficiary_name > a.beneficiary_name) return -1;
        return 0;
      } else if (sort?.value === 'name|desc') {
        if (a.beneficiary_name < b.beneficiary_name) return 1;
        if (a.beneficiary_name > b.beneficiary_name) return -1;
        return 0;
      } else if (sort?.value === 'date|asc') {
        if (b.created_at < a.created_at) return 1;
        if (b.created_at > a.created_at) return -1;
        return 0;
      } else if (sort?.value === 'date|desc') {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at > b.created_at) return -1;
        return 0;
      } else {
        if (a.created_at < b.created_at) return 1;
        if (a.created_at > b.created_at) return -1;
        return 0;
      }
    });

    dispatch({
      type: 'SORT_TRANSACTIONS_SUCCESS',
      sort: sort,
    });

    dispatch({
      type: 'GET_TRANSACTIONS_SUCCESS',
      data: result,
      all: all,
    });
  };
};

export const setDetailTransactions = data => {
  return (dispatch, getState) => {
    dispatch({
      type: 'SET_DETAIL_TRANSACTION',
      detail: data,
    });
  };
};
