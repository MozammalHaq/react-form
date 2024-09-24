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

## useRef and set default cursor to input field
```markdown
import React, { useEffect, useRef } from 'react'

export default function Ref() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  const handleForm = e => {
    e.preventDefault();
    console.log(nameRef.current.value)
    console.log(emailRef.current.value)

  }

  // default set cursor in input field
  useEffect(() => {
    nameRef.current.focus();
  }, [])

  return (
    <form onSubmit={handleForm} className="flex flex-col items-center justify-center my-60">
      <input className="p-2 border border-gray-500" ref={nameRef} type="text" name="name" /> <br /> <br />
      <input className="p-2 border border-gray-500" ref={emailRef} type="email" name="email" /> <br />
      <input type="submit" />
    </form>
  )
}

```
## Custom Hook form
### 1. Custom Hook, return as Array
```markdown
import { useState } from "react"

const useInputState = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return [value, handleChange]
}
export default useInputState;
```

### Use of custom hook
```markdown
import useInputState from "../hooks/useInputState"


export default function HookForm() {
    const [name, handleNameChange] = useInputState('');
    const [email, handleEmailChange] = useInputState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-60">
            <input value={name} onChange={handleNameChange} className="border border-gray-500" type="text" name="name" /> <br /> <br />
            <input onChange={handleEmailChange} className="border border-gray-500" type="email" name="email" /> <br />
            <input type="submit" />
        </form>
    )
}
```

### 1. Custom Hook, return as Object
```markdown
import { useState } from "react"

const useInputStateO = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value);
    }

    return {
        value,
        onChange
    }
}
export default useInputStateO;
```

### Use of custom hook
```markdown

import useInputStateO from "../hooks/useInputStateO";

export default function HookFormO() {
    const nameState = useInputStateO('');
    const emailState = useInputStateO('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameState.value, emailState)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-60">
            <input {...nameState} className="border border-gray-500" type="text" name="name" /> <br /> <br />
            <input {...emailState} className="border border-gray-500" type="email" name="email" /> <br />
            <input type="submit" />
        </form>
    )
}

```
## Reusable form
### Component
```markdown

export default function ReusableForm({ title, children, handleSubmit }) {

    const handleCommonSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
        }
        handleSubmit(data)
    }

    return (
        <div className="flex flex-col items-center justify-center my-6 text-center ">
            {children}
            <div className="border rounded-md border-orange-600 p-4">
                <h2 className="text-3xl text-green-600 mb-3">{title}</h2>
                <form onSubmit={handleCommonSubmit}>
                    <input className="border border-gray-500" type="text" name="name" /> <br /> <br />
                    <input className="border border-gray-500" type="email" name="email" /> <br />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

```

```markdown
import ReusableForm from './component/ReusableForm'

function App() {

  const handleSignup = data => {
    console.log("Signup data", data)
  }

  const handleUpdate = data => {
    console.log("update", data)
  }

  return (
    <>
      <ReusableForm handleSubmit={handleSignup}>
        <h2 className='text-3xl text-green-600'>Login Form</h2>
        <p>Confirm your email</p>
      </ReusableForm >
      <ReusableForm title="Signup" handleSubmit={handleUpdate}/>
    </>
  )
}

export default App

```