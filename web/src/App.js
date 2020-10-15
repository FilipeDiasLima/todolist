import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
import {ToastContainer} from 'react-toastify'
import {BrowserRouter as Router} from 'react-router-dom'

import './config/ReactotronConfig';
import Routes from './routes';

import history from './services/history';

import {persistor, store} from './store';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes/>
          <GlobalStyles/>
          <ToastContainer autoClose={3000}/>
        </PersistGate>
      </Provider>
    </Router>
  );
}

export default App;
