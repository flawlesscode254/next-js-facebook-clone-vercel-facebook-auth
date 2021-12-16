import { useSession } from "next-auth/react";

import Header from '../components/Header'
import LogIn from '../components/LogIn';
import SideBar from '../components/SideBar';

export default function Component() {
  const { data: session } = useSession();
function SideBar() {
    return (
        <div>
            <h1>I am the sidebar component</h1>
        </div>
    )
}

export default SideBar
