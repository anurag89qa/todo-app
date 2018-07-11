import {applyMiddleware, compose, createStore} from 'redux'
import logs from 'redux-logger'

import reducer from '../reducers/index'

const store = createStore(reducer, applyMiddleware(logs));

store.subscribe(() => {
    console.log(store.getState());
});

export default store