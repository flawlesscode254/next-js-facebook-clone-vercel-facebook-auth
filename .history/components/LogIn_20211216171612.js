import Image from "next/image"

function LogIn() {
    return (
        <div className="grid place-items-center">
            <Image 
                src="https://links.papareact.com/t4i"
                width={400}
                height={400}
                objectFit="contain"
            />
            <h1 className="p-5 bg-blue-500 rounded-full text-white texte">Login with facebook</h1>
        </div>
    )
}

export default LogIn
