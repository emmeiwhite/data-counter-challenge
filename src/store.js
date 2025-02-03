import { applyMiddleware, createStore } from 'redux'
// import productsReducer from './redux/productsReducer'
import { thunk } from 'redux-thunk'
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
