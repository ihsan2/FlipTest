const initialState = {
  loading: false,
  transactions: [],
  all: [],
  search: '',
  sort: {
    label: 'URUTKAN',
    value: '',
  },
  refreshing: false,
  detail: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_TRANSACTIONS_START':
      return {
        ...state,
        loading: true,
        refreshing: action.refreshing,
      };
    case 'GET_TRANSACTIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        transactions: action.data,
        all: action.all,
        refreshing: false,
      };
    case 'SEARCH_TRANSACTIONS_SUCCESS':
      return {
        ...state,
        search: action.search,
      };
    case 'SORT_TRANSACTIONS_SUCCESS':
      return {
        ...state,
        sort: action.sort,
      };
    case 'GET_TRANSACTIONS_FAIL':
      return {...state, loading: false, refreshing: false};

    case 'SET_DETAIL_TRANSACTION':
      return {
        ...state,
        detail: action.detail,
      };
  }

  return state;
}
