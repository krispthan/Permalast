import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.scss';
import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './components/reducers/index';
import App from './App';


const store = createStore (rootReducer);
ReactDOM.render(
    <Provider store={ store }>
      {/* <Router/> */}
         <App/>
      {/* <Router/> */}
    </Provider>,
    document.getElementById('root'));

