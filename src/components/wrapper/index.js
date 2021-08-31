import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import * as colors from '../../theme/colors';

const index = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.primary} barStyle={'light-content'} />
      {children}
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
  },
});
