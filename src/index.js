import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/*
Provider and createStore are a built in functions in redux
*/
import './index.css';
import App from './containers/App';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(<App store={ store } />, document.getElementById('root'));