
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
