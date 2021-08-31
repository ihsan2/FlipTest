import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Wrapper from '../../components/wrapper';
import Card from './Card';
import Search from '../../components/search';
import {useDispatch, useSelector} from 'react-redux';
import {
  getTranscations,
  searchTransactions,
  setDetailTransactions,
  sortTransactions,
} from '../../redux/actions/transactionAction';
import * as colors from '../../theme/colors';

let dataSort = [
  {
    value: '',
    label: 'URUTKAN',
  },
  {
    value: 'name|asc',
    label: 'Nama A-Z',
  },
  {
    value: 'name|desc',
    label: 'Nama Z-A',
  },
  {
    value: 'date|desc',
    label: 'Tanggal Terbaru',
  },
  {
    value: 'date|asc',
    label: 'Tanggal Terlama',
  },
];

const index = ({navigation}) => {
  const dispatch = useDispatch();
  const transactionState = useSelector(state => state.transactionState);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(
      getTranscations({
        refreshing: true,
      }),
    );
  };

  const _handleSearch = text => {
    dispatch(searchTransactions(text));
  };

  const _handleSort = val => {
    dispatch(sortTransactions(val));
  };

  const _detail = item => {
    dispatch(setDetailTransactions(item));
    navigation.navigate('Detail');
  };

  return (
    <Wrapper>
      <ScrollView
        contentContainerStyle={{padding: 16}}
        refreshControl={
          <RefreshControl
            refreshing={transactionState?.refreshing}
            onRefresh={getData}
          />
        }>
        <View style={{marginBottom: 15}}>
          <Search
            setSortVal={v => _handleSort(v)}
            sortVal={transactionState?.sort}
            onChange={v => _handleSearch(v)}
            searchVal={transactionState?.search}
            sort={dataSort}
            label={'Cari nama, bank, atau nominal'}
          />
        </View>
        <View style={{flex: 1}}>
          {transactionState?.loading ? (
            <ActivityIndicator color={colors.primary} />
          ) : (
            transactionState?.transactions.map((item, key) => {
              return (
                <Card key={key} item={item} onPress={() => _detail(item)} />
              );
            })
          )}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default index;
