
import useInputStateO from "../hooks/useInputStateO";

export default function HookFormO() {
    const nameState = useInputStateO('');
    const emailState = useInputStateO('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(nameState, emailState)
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center my-60">
            <input {...nameState} className="border border-gray-500" type="text" name="name" /> <br /> <br />
            <input {...emailState} className="border border-gray-500" type="email" name="email" /> <br />
            <input type="submit" />
        </form>
    )
}
