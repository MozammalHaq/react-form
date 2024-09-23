import { useState } from 'react'
import './App.css'
import SimpleForm from './component/SimpleForm'
import StatefullForm from './component/StatefullForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SimpleForm/> */}
      <StatefullForm/>
    </>
  )
}

export default App
