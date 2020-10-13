import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'

import './config/ReactotronConfig';
import Routes from './routes';


import {persistor, store} from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Routes/>
          <GlobalStyles/>
      </PersistGate>
    </Provider>
  );
}

export default App;
