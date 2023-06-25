import { legacy_createStore as createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__());

// createStore take 3 arguments one is reducer, middleware, state which is empty
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) this is for DEV tools
export default store;

