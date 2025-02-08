import { useReducer } from 'react'

const initialState = {
  balance: 0,
  loan: 0,
  isDisabled: true
}

const reducer = (state, action) => {
  if (action.type === 'open_access') {
    return {
      ...state,
      isDisabled: false,
      balance: state.balance + 500
    }
  }

  if (action.type === 'deposit') {
    return {
      ...state,
      balance: state.balance + 150
    }
  }

  if (action.type === 'withdraw') {
    if (state.balance <= action.payload) return { ...state }

    return {
      ...state,
      balance: state.balance - action.payload
    }
  }

  if (action.type === 'request_loan') {
    return {
      ...state,
      loan: state.loan + action.payload
    }
  }

  if (action.type === 'pay_loan') {
    return {
      ...state,
      loan: 0
    }
  }

  if (action.type === 'close_account') {
    return {
      ...initialState
    }
  }
}

const BankingApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  function handleOpen() {
    dispatch({ type: 'open_access' })
  }
  return (
    <div>
      <p>Balance: {state.balance}</p>
      <p>Loan: {state.loan}</p>

      <div className="my-4">
        <button
          className={`px-4 py-2 bg-blue-400 text-white cursor-pointer ${
            state.isDisabled ? 'border-2 border-amber-700 cursor-pointer' : ' cursor-not-allowed'
          }`}
          onClick={handleOpen}
          disabled={!state.isDisabled}>
          Open Account
        </button>
      </div>

      <div>
        <button
          className={`px-4 py-2 bg-green-400 text-white ${
            state.isDisabled ? 'cursor-not-allowed' : 'border-2 border-amber-700 cursor-pointer'
          }`}
          disabled={state.isDisabled}
          onClick={() => dispatch({ type: 'deposit' })}>
          Deposit 150
        </button>
      </div>

      <div className="my-4">
        <button
          className={`px-4 py-2 bg-orange-400 text-white ${
            state.isDisabled ? 'cursor-not-allowed' : 'border-2 border-red-700 cursor-pointer'
          }`}
          disabled={state.isDisabled}
          onClick={() => dispatch({ type: 'withdraw', payload: 50 })}>
          Withdraw 50
        </button>
      </div>

      <div className="my-4">
        <button
          className={`px-4 py-2 bg-purple-400 text-white ${
            state.isDisabled ? 'cursor-not-allowed' : 'border-2 border-green-700 cursor-pointer'
          }`}
          disabled={state.isDisabled}
          onClick={() => dispatch({ type: 'request_loan', payload: 5000 })}>
          Request a loan of 5000
        </button>
      </div>

      <div className="my-4">
        <button
          className={`px-4 py-2 bg-purple-400 text-white ${
            state.isDisabled ? 'cursor-not-allowed' : 'border-2 border-red-700 cursor-pointer'
          }`}
          disabled={state.isDisabled}
          onClick={() => dispatch({ type: 'pay_loan' })}>
          Pay back full loan
        </button>
      </div>

      <div className="my-4">
        <button
          className={`px-4 py-2 bg-black text-white ${
            state.isDisabled ? 'cursor-not-allowed' : 'border-2 border-green-700 cursor-pointer'
          }`}
          disabled={state.isDisabled}
          onClick={() => dispatch({ type: 'close_account' })}>
          Close the account
        </button>
      </div>
    </div>
  )
}
export default BankingApp
