import alunoReducer from './aluno.js';
import aulasReducer from './aulas.js';

const reducer = Redux.combineReducers({alunoReducer, aulasReducer});
const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;