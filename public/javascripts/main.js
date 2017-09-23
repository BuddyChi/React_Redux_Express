
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from './container/devtool/devtools.js'
import 'antd/dist/antd.css';
import {createStoreWithMiddleWare} from './redux/configureStore';
import MyRoutes from './routes/MyRoutes'
const store = createStoreWithMiddleWare();

render(
    (
        <Provider store={store}>
            <div>
                <MyRoutes history={hashHistory}></MyRoutes>
                <DevTools></DevTools>
            </div>

        </Provider>
    )
    ,
    document.getElementById("app")
)
