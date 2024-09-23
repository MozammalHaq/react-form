

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
