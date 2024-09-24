import { useState } from 'react'
import './App.css'
import ReusableForm from './component/ReusableForm'
// import SimpleForm from './component/SimpleForm'
// import StatefullForm from './component/StatefullForm'
// import Ref from './component/Ref'
// import HookForm from './component/HookForm'
// import HookFormO from './component/HookFormO'

function App() {

  const handleSignup = data => {
    console.log("Signup data", data)
  }

  const handleUpdate = data => {
    console.log("update", data)
  }

  return (
    <>
      {/* <SimpleForm/> */}
      {/* <StatefullForm/> */}
      {/* <Ref/> */}
      {/* <HookForm/> */}
      {/* <HookFormO/> */}
      <ReusableForm handleSubmit={handleSignup}>
        <h2 className='text-3xl text-green-600'>Login Form</h2>
        <p>Confirm your email</p>
      </ReusableForm >
      <ReusableForm title="Signup" handleSubmit={handleUpdate}/>
    </>
  )
}

export default App
