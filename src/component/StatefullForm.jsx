import React, { useState } from 'react'

export default function StatefullForm() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);

    const handlFormSubmit = e => {
        e.preventDefault();
        if(password.length <= 6){
            setError("password should at least 6 charecter");
            return;
        } else {
            setError("")
        }
        console.log(name, email, password)
    }

    const onNameChange = e => {
        setName(e.target.value);
    }
    const onEmailChange = e => {
        setEmail(e.target.value);
    }
    const onPasswordChange = e => {
        setPassword(e.target.value);
    }

  return (
    <form onSubmit={handlFormSubmit} className="flex flex-col items-center justify-center my-60">
        <input onChange={onNameChange} className="border border-gray-500" type="text" name="name" /> <br />
        <input onChange={onEmailChange} className="border border-gray-500" type="email" name="email" /> <br />
        <input onChange={onPasswordChange} className="border border-gray-500" type="password" name="password" /> <br />
        {error && <p className='text-red-500'>{error}</p>}
        <input type="submit"/>
    </form>
  )
}
