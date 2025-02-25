import { applyMiddleware, createStore } from 'redux'
// import productsReducer from './redux/productsReducer'
import { thunk } from 'redux-thunk'
import rootReducer from './redux/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
