import { useSession } from "next-auth/react";
  const { data: session } = useSession();
function SideBar() {
    return (
        <div>
            <h1>I am the sidebar component</h1>
        </div>
    )
}

export default SideBar
