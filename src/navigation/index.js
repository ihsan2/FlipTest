import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as colors from '../theme/colors';

const Stack = createNativeStackNavigator();

// import screen
import TransactionScreen from '../pages/Transaction';
import DetailScreen from '../pages/Detail';

function App() {
  const configNav = {
    headerStyle: {backgroundColor: colors.primary},
    headerTitleStyle: {color: colors.white},
    headerTintColor: colors.white,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group screenOptions={configNav}>
          <Stack.Screen
            name="Transaction"
            component={TransactionScreen}
            options={{
              title: 'Transaksi',
            }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{
              title: 'Detail Transaksi',
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
