import { useSession } from "next-auth/react";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div>
            <h1>{}</h1>
        </div>
    )
}

export default SideBar
