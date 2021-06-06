import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 
import { todoListReducer } from './todoListReducer';

const persistConfig = {
	key:'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig , todoListReducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistStoree = persistStore(store);

export const todoListRedux = {
	store,
	persistStoree
}