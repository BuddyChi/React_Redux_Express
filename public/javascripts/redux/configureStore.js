import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import DevTools from '../container/devtool/devtools.js';

const enhancer = compose(
    applyMiddleware(thunk),
    DevTools.instrument()
)

export default function createStoreWithMiddleware(initialState){
    const store = createStore(rootReducer,initialState,enhancer);
    return store;
}