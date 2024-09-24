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
