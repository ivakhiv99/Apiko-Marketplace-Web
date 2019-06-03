import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReduser from '../modules';


const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
