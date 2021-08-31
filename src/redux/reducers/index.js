import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import transactionReducer from './transcationReducer';

const transactionPersistConfig = {
  key: 'transactions',
  storage: AsyncStorage,
  whitelist: [''],
};

const rootReducer = combineReducers({
  transactionState: persistReducer(
    transactionPersistConfig,
    transactionReducer,
  ),
});

export default rootReducer;
