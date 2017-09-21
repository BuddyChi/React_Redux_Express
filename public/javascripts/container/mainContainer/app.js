import React from 'react';
import './app.css';
import {connect} from 'react-redux'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentWillMount(){
        console.log('yoyouyoyoyou',this.props.store);
    }

    render(){
        return(
            <div>
                <h1 >你好吗sssyoyou</h1>
                <div>这是首页啊</div>
            </div>
            
        ) 
    }
}

const mapState = (state) => {
    return {
        state
    }
};

export  default connect(mapState)(App);