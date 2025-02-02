import { useState } from 'react'

const DateCounter = () => {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(0)

  function handleCountIncrease() {
    setCount(c => (c + !step ? c + 1 : step))
  }

  function handleCountDecrease() {
    setCount(c => (c - !step ? c - 1 : step))
  }
  return (
    <div>
      <h2 className="text-center my-3 text-2xl font-semibold">
        A) Challenge-1 (Date Counter) [Version-1]
      </h2>

      <div className="flex gap-3 justify-center items-center">
        <button
          className="px-3 py-1 bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition text-white"
          onClick={() => setStep(c => c - 1)}>
          -
        </button>
        <p>Step: {step}</p>
        <button
          className="px-3 py-1 bg-orange-400 text-white cursor-pointer hover:bg-orange-600 transition text-white"
          onClick={() => setStep(c => c + 1)}>
          +
        </button>
      </div>

      <div className="flex gap-3 justify-center items-center mt-3">
        <button
          className="px-3 py-1 bg-teal-400 hover:bg-teal-600 transition text-white cursor-pointer"
          onClick={handleCountDecrease}>
          -
        </button>
        <p>Count: {count}</p>
        <button
          className="px-3 py-1 bg-teal-400 hover:bg-teal-600 transition text-white cursor-pointer"
          onClick={handleCountIncrease}>
          +
        </button>
      </div>

      <p className="mt-4">Today is Mon Jun 21, 2024</p>
      <h3>Current Count Value: {count}</h3>
    </div>
  )
}
export default DateCounter
