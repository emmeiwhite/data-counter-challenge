import DateCounter from './components/DateCounter'
import { Provider } from 'react-redux'
import store from './store'
import Products from './components/Products'
function App() {
  // UI is dependant on data of the application called the state
  return (
    <Provider store={store}>
      <section className="container px-5 pt-5 text-center m-auto">
        {/* <DateCounter /> */}

        <Products />
      </section>
    </Provider>
  )
}

export default App
