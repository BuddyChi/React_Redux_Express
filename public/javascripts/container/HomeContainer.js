import React from 'react';
import { Button } from 'antd';
import createDevTools from '../container/devtool/devtools.js'
class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return (
            <div>
                <span>sdfsdf</span>
                <createDevTools></createDevTools>
            </div>

        )
    }
}

export default HomeContainer

