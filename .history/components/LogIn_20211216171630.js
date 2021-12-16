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
            <h1 className="p-4 cursor-pointer bg-blue-500 rounded-full text-white text-center">Login with facebook</h1>
        </div>
    )
}

export default LogIn
