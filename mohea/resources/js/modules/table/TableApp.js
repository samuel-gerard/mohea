import Table from './components/table';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import { GrowlComponent } from '@crystallize/react-growl';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={ store }>
      <GrowlComponent />
      <Table />
    </Provider>,
  document.getElementById('app-table')
);