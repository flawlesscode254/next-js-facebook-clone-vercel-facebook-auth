import Image from "next/image"

function LogIn() {
    return (
        <div className="grid place-items-cente">
            <Image 
                src="https://links.papareact.com/5me"
                width={400}
                height={400}
                objectFit="contain"
            />
            <h1>Login with facebook</h1>
        </div>
    )
}

export default LogIn
