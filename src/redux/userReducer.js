import { ADD_USER } from './actionTypes'

const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {
  if (action.type === ADD_USER) {
    return { ...state, users: [...state.users, action.payload] }
  }

  return state
}

export default userReducer
