import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from '../../components/text';
import * as colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Fontisto';
import {formatDate, formatRupiah} from '../../helpers';

const Card = ({item, onPress}) => {
  let isSuccess = item?.status === 'SUCCESS' ? true : false;
  return (
    <TouchableOpacity
      style={styles.body}
      activeOpacity={0.5}
      onPress={() => {
        onPress();
      }}>
      <View
        style={[
          styles.leftSide,
          {backgroundColor: isSuccess ? colors.green : colors.primary},
        ]}
      />
      <View style={styles.rightSide}>
        <View style={{flex: 1, marginRight: 10}}>
          <View style={styles.bankSection}>
            <Text bold size={20}>
              {item?.sender_bank.toUpperCase()}
            </Text>
            <Icon
              name="arrow-right"
              size={18}
              color={colors.black}
              style={styles.rightIcon}
            />
            <Text bold size={20}>
              {item?.beneficiary_bank.toUpperCase()}
            </Text>
          </View>
          <View style={{marginVertical: 2}}>
            <Text style={styles.text} size={18}>
              {item?.beneficiary_name.toUpperCase()}
            </Text>
          </View>
          <View style={styles.bankSection}>
            <Text style={styles.text} size={18}>
              {formatRupiah(item?.amount)}
            </Text>
            <Icon
              name="ellipse"
              size={8}
              color={colors.black}
              style={styles.dotIcon}
            />
            <Text style={styles.text} size={18}>
              {formatDate(item?.created_at)}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={[
              {
                backgroundColor: isSuccess ? colors.green : colors.white,
                borderColor: isSuccess ? colors.green : colors.orange,
              },
              styles.badgeView,
            ]}>
            <Text
              bold
              size={18}
              color={isSuccess ? colors.white : colors.black}>
              {isSuccess ? 'Berhasil' : 'Pengecekan'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftSide: {
    width: 6,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  rightSide: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bankSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 72,
  },
  rightIcon: {
    marginHorizontal: 10,
  },
  dotIcon: {
    marginHorizontal: 6,
  },
  text: {
    fontWeight: '500',
  },
  badgeView: {
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
    paddingVertical: 4,
    borderRadius: 5,
    borderWidth: 2,
  },
});
