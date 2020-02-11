import Form from './components/Form';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
      <Form />
    </Provider>,
  document.getElementById('app-form')
);