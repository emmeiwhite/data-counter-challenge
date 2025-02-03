import productsReducer from './productsReducer'
import userReducer from './userReducer'

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  products: productsReducer,
  user: userReducer
})

export default rootReducer
