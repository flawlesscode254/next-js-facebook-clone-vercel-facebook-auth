import { useSession } from "next-auth/react";
import Image from "next/image";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div className="p-2 mt-5 max-w[">
            <Image 
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={40}
                height={40}
                layout="fixed"
            />
            <h1>{session.user.name}</h1>
        </div>
    )
}

export default SideBar
