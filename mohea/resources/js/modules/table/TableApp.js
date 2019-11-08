const Table = require('./components/table.jsx');
      Provider = require("react-redux").Provider,
      React = require("react"),
      ReactDOM = require("react-dom"),
      reducers = require("./redux/reducers.js"),
      Redux = require("redux");

let store = null;
const defaultTab = {
  'head': [],
  'body': [],
  'footer': []
}

store = Redux.createStore(
    reducers,
    {
      'nbCol': 1,
      'tableau': defaultTab,
      'caption': '',
      'name': ''
    }
);

ReactDOM.render(
    <Provider store={store} >
      <Table />
    </Provider>,
  document.getElementById('app-table'));