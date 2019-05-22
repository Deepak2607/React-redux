import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import reducer from './store/reducer';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


const combinedReducer= combineReducers({
    ctr:counterReducer,
    res:resultReducer
})


const store= createStore(combinedReducer);

store.subscribe(()=> {
    console.log(store.getState());
})


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


