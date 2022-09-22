import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  {composewithDevTools } from 'redux-devtools-extension';


const reducer = combineReducers({});

const initialState = {};

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composewithDevTools(applyMiddleware(...middleware))
);

export default store;