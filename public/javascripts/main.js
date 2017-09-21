
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import TestRedux from './container/testRedux/TestRedux'
import About from './about';
import 'antd/dist/antd.css';
import reducers from './redux/reducers/rootReducer.js';
import DevTools from './container/devtool/devtools.js';

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)

let store = createStore(reducers, enhancer);

render(
    (
        <Provider store={store}>
            <div>
                <Router history={hashHistory}>
                    <Route path="/" component={About} />
                    <Route path="/test" component={TestRedux} />
                    <Route path="/about" component={About} />
                </Router>
                <DevTools></DevTools>
            </div>

        </Provider>
    )
    ,
    document.getElementById("app")
)
