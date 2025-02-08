import DateCounter from './components/DateCounter'
import { Provider } from 'react-redux'
import store from './store'
import Products from './components/Products'
import LoginForm from './components/Login'
import User from './components/Users'
import BankingApp from './components/BankingApp'
function App() {
  // UI is dependant on data of the application called the state
  return (
    <Provider store={store}>
      <section className="container px-5 pt-5 text-center m-auto">
        {/* <DateCounter /> */}

        {/* <Products /> */}
        {/* <LoginForm /> */}

        {/* <User /> */}
        <BankingApp />
      </section>
    </Provider>
  )
}

export default App
