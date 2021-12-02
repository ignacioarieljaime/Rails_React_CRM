import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Navbar } from './components';

import Routes from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

