# React Form hanlde

## Normally
```markdown
export default function SimpleForm() {
    const handleForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email)
    }
  return (
    <form onSubmit={handleForm} className="flex flex-col items-center justify-center my-60">
        <input className="border border-gray-500" type="text" name="name" /> <br /> <br />
        <input className="border border-gray-500" type="email" name="email" /> <br />
        <input type="submit"/>
    </form>
  )
}
```

## Stateful

```markdown
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

```

