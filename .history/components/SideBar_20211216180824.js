import { useSession } from "next-auth/react";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div>
            <h1>I am the sidebar component</h1>
        </div>
    )
}

export default SideBar
