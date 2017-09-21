import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { increase, decrease } from '../../redux/actions/test'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onIncreaseClick() {
        const { dispatch } = this.props;
        dispatch(increase());
    }

    componentWillMount() {
        console.log('yoyouyoyoyou', this.props.store);
    }

    render() {
        const { value,data } = this.props;
        return (
            <div>
                <span>{value}</span>
                <span>yoyou</span>
                <span>{data}</span>
                <Button onClick={this.onIncreaseClick.bind(this)}>点击我增加</Button>
            </div>

        )
    }
}

const mapState = (state) => {
    console.log('state=====',state);
    return {
        value: state.count,
        data:state.data
    }
}


const App = connect(
    mapState
)(Counter);

export default App;

