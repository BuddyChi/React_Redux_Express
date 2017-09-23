
import React,{Component,PropTypes} from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import TestRedux from '../container/testRedux/TestRedux'
import About from '../about.js';


export class MyRoutes extends Component{
 
    render(){
        return(
            <Router history={this.props.history}>
                <Route path="/" component={About} />
                <Route path="/test" component={TestRedux} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

export default MyRoutes;
