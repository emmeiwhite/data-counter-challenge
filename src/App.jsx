function App() {
  // UI is dependant on data of the application called the state
  return (
    <section className="container px-5 pt-5 text-center">
      <h1 className="text-3xl my-6">Setting up Tailwind-4 with React-Vite Project</h1>
      <button className="bg-blue-400 p-2 text-white hover:bg-blue-600 transition cursor-pointer">
        I am a button
      </button>

      <h2 className="text-center my-3 text-2xl font-semibold">
        A) Challenge-1 (Date Counter) [Version-1]
      </h2>

      <div className="flex gap-3 justify-center items-center">
        <button className="px-3 py-1 bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition text-white">
          -
        </button>
        <p>Step: 5</p>
        <button className="px-3 py-1 bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition text-white">
          +
        </button>
      </div>

      <div className="flex gap-3 justify-center items-center mt-3">
        <button className="px-3 py-1 bg-teal-400 hover:bg-teal-600 transition text-white cursor-pointer">
          -
        </button>
        <p>Count: 0</p>
        <button className="px-3 py-1 bg-teal-400 hover:bg-teal-600 transition text-white cursor-pointer">
          +
        </button>
      </div>

      <p className="mt-4">Today is Mon Jun 21, 2024</p>
    </section>
  )
}

export default App
