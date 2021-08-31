import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import * as colors from '../../theme/colors';
import Text from '../../components/text';
import Icon from 'react-native-vector-icons/FontAwesome';

const sort = ({isVisible, data, value, close, setValue}) => {
  return (
    <View>
      <Modal isVisible={isVisible} onBackdropPress={close}>
        <View style={styles.body}>
          {data.map((item, key) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setValue(item);
                  close();
                }}
                key={key}
                style={[styles.item, {marginTop: key === 0 ? 0 : 20}]}>
                <Icon
                  name={
                    value?.value === item?.value ? 'dot-circle-o' : 'circle-o'
                  }
                  size={28}
                  color={colors.orange}
                  style={{marginRight: 15}}
                />
                <Text style={{fontWeight: '500'}} size={18}>
                  {item?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </Modal>
    </View>
  );
};

export default sort;

const styles = StyleSheet.create({
  body: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
