import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
