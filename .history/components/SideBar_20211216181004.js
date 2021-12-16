import { useSession } from "next-auth/react";
import Image from "next/image";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div>
            <Image 
                className="rounded-full cursor-pointer"
                src={session.user.image}
                width={400}
                height={40}
            />
            <h1>{session.user.name}</h1>
        </div>
    )
}

export default SideBar
