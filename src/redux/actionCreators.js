import { FETCH_REQUEST } from './actionTypes'

export const fetch_request = () => {
  return {
    type: FETCH_REQUEST
  }
}

export const fetch_success = products => {
  return {
    type: FETCH_REQUEST,
    payload: products
  }
}

export const fetch_error = error => {
  return {
    type: FETCH_REQUEST,
    payload: error
  }
}

// Thunk Action
const url = 'https://dummyjson.com/products'
const products_fetch = () => {
  return dispatch => {
    dispatch(fetch_request())
    axios(url)
      .then(res => {
        dispatch(fetch_success(res))
        console.log(res)
      })
      .catch(err => {
        dispatch(fetch_error(err))
        console.log(err)
      })
  }
}
