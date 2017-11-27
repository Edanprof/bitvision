import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-ruter-dom';
import promise from 'redux-promise';
import reducers from './reducers';
import Login from './components/login';
import MainIndex from './components/main_index';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={MainIndex}/>
        </Switch>
      </div>
    </BrowserRouter>
    <App />
  </Provider>
  , document.querySelector('.container'));
