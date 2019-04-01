import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './components/reducers/index';
import './styles/styles.scss';
import App from './App';


const store = createStore (rootReducer);
ReactDOM.render(
    <Provider store={ store }>
         <App/>
    </Provider>,
    document.getElementById('root'));

