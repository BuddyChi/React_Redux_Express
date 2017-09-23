import thunk from 'redux-thunk';
import {createStore,applyMiddleware,compose} from 'redux';
import rootReducer from './reducers/rootReducer.js';
import DevTools from '../container/devtool/devtools.js';

export function createStoreWithMiddleWare(){
    const enhancer = compose(
        applyMiddleware(thunk),
        DevTools.instrument()
    )
    const store = createStore(rootReducer, enhancer);
    return store
}
