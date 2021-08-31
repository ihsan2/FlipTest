import React, {useState} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Wrapper from '../../components/wrapper';
import * as colors from '../../theme/colors';
import Text from '../../components/text';
import Icon from 'react-native-vector-icons/Fontisto';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';

const index = () => {
  const detail = useSelector(state => state.transactionState?.detail);
  const [show, setShow] = useState(true);

  const copyID = () => {
    Clipboard.setString(detail?.id.toString());
    ToastAndroid.show('ID TRANSAKSI TELAH DISALIN', 3000);
  };

  return (
    <Wrapper>
      <ScrollView>
        <View style={styles.idSection}>
          <Text bold size={18}>
            ID TRANSAKSI: #{detail?.id}
          </Text>
          <MCI
            onPress={() => {
              copyID();
            }}
            style={{marginLeft: 10}}
            name={'content-copy'}
            size={24}
            color={colors.orange}
          />
        </View>
        <View style={styles.detailSection}>
          <View style={styles.detailHeader}>
            <Text bold size={18}>
              DETAIL TRANSAKSI
            </Text>
            <TouchableOpacity onPress={() => setShow(!show)}>
              <Text bold style={styles.showText}>
                {show ? 'Tutup' : 'Lihat'}
              </Text>
            </TouchableOpacity>
          </View>
          {show ? (
            <View style={{padding: 16}}>
              <View style={styles.bankSection}>
                <Text bold size={20}>
                  {detail?.sender_bank.toUpperCase()}
                </Text>
                <Icon
                  name="arrow-right"
                  size={18}
                  color={colors.black}
                  style={styles.rightIcon}
                />
                <Text bold size={20}>
                  {detail?.beneficiary_bank.toUpperCase()}
                </Text>
              </View>
              <View style={styles.infoSection}>
                {detail?.info.map((item, key) => {
                  return (
                    <View
                      key={key}
                      style={[
                        {
                          width: key % 2 === 0 ? '60%' : '40%',
                          marginBottom: 20,
                        },
                      ]}>
                      <Text style={styles.keyText} size={20}>
                        {item?.key.toUpperCase()}
                      </Text>
                      <Text style={styles.valueText} size={20}>
                        {item?.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default index;

const styles = StyleSheet.create({
  idSection: {
    backgroundColor: colors.white,
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailSection: {
    backgroundColor: colors.white,
    paddingTop: 20,
    marginTop: 4,
  },
  detailHeader: {
    borderBottomWidth: 2,
    paddingHorizontal: 16,
    paddingBottom: 20,
    borderColor: colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bankSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 72,
  },
  rightIcon: {
    marginHorizontal: 10,
  },
  infoSection: {
    marginTop: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keyText: {
    fontWeight: '600',
    marginBottom: 2,
  },
  valueText: {
    textTransform: 'capitalize',
  },
  showText: {
    color: colors.orange,
    fontSize: 18,
  },
});
