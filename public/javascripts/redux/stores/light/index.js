
import {createStore} from 'redux';
import lightReducer from '../../reducers/light/index.js'

export default function lightStore(initState){
    return createStore(lightReducer,initState); // 初始化创建
  }