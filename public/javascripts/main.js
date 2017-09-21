
import React from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import {Provider,connect} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore,applyMiddleware} from 'redux';
import TestRedux from './container/testRedux/TestRedux'
import About from './about';
import 'antd/dist/antd.css';
import reducers from './redux/reducers/index.js'
let store = createStore(reducers,applyMiddleware(thunk));

render(
    (
     <Provider store={store}>
        <Router history={hashHistory}>
        <Route path="/" component={About}/>
        <Route path="/test" component={TestRedux}/>
        <Route path="/about" component={About}/>
        </Router>     
     </Provider>   
     )
    ,
    document.getElementById("app")
)
