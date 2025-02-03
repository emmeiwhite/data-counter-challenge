import { ADD_USER, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './actionTypes'
import axios from 'axios'

export const fetch_request = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetch_success = products => {
  return {
    type: FETCH_SUCCESS,
    payload: products
  }
}

export const fetch_error = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}

// To add the user Entered in Login Form
export const add_user = user => {
  return {
    type: ADD_USER,
    payload: user
  }
}

// Thunk Action
const url = 'https://dummyjson.com/products'
const products_fetch = () => {
  return dispatch => {
    dispatch(fetch_request())
    axios(url)
      .then(res => {
        dispatch(fetch_success(res.data.products))
        console.log(res.data.products)
      })
      .catch(err => {
        dispatch(fetch_error(err))
        console.log(err)
      })
  }
}

export default products_fetch
