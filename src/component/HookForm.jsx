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
