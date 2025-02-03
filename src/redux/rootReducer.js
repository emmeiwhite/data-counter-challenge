import productsReducer from './productsReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products: productsReducer,
  users: userReducer
})

export default rootReducer
