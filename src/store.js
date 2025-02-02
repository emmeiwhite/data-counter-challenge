import { applyMiddleware, createStore } from 'redux'
import productsReducer from './redux/productsReducer'
import { thunk } from 'redux-thunk'

const store = createStore(productsReducer, applyMiddleware(thunk))

export default store
