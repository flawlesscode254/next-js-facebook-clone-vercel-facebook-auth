import { useSession } from "next-auth/react";
import Image from "next/image";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <Side
        </div>
    )
}

export default SideBar
