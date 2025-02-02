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
