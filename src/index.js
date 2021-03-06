import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome5/css/fontawesome.css';
import './index.scss';
import App from '../src/containers/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import reducer from './store/reducer/productReducer';
import {Provider} from 'react-redux';


const store =createStore(reducer);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
