import {createStore,applyMiddleware} from 'redux';
import {RootReducer} from './rootReducers';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger)))
export default store