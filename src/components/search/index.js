import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';
import * as colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Feather';
import Text from '../../components/text';
import ModalSort from '../../components/modal/sort';

const index = ({
  label = '',
  sort,
  sortVal,
  setSortVal,
  onChange,
  searchVal,
}) => {
  const [isVisible, setVisible] = useState(false);

  return (
    <View style={styles.body}>
      <View style={styles.left}>
        <Icon name={'search'} color={colors.darkGrey} size={24} />
        <TextInput
          onChangeText={v => onChange(v)}
          placeholderTextColor={colors.darkGrey}
          placeholder={label}
          style={styles.input}
          value={searchVal}
        />
      </View>
      {sort ? (
        <TouchableOpacity style={styles.sort} onPress={() => setVisible(true)}>
          <Text size={16} bold color={colors.orange}>
            {sortVal?.label}
          </Text>
          <Icon name={'chevron-down'} size={26} color={colors.orange} />
        </TouchableOpacity>
      ) : null}

      {sort ? (
        <ModalSort
          value={sortVal}
          setValue={setSortVal}
          data={sort}
          isVisible={isVisible}
          close={() => setVisible(false)}
        />
      ) : null}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    backgroundColor: colors.white,
    height: 54,
    fontSize: 16,
    color: colors.black,
    marginLeft: 10,
    marginRight: 20,
    flex: 1,
  },
  sort: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
