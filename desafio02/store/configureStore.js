import usuario from './usuario.js';
import token from './token.js';
import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';

const { createStore, combineReducers, compose, applyMiddleware } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({usuario, token});
const store = createStore(reducer, enhancer);

export default store;