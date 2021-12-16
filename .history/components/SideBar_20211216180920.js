import { useSession } from "next-auth/react";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div>
            <import { useSession } from "next-auth/react";

import Header from '../components/Header'
import LogIn from '../components/LogIn';
import SideBar from '../components/SideBar';

export default function Component() {
  const { data: session } = useSession(); />
            <h1>{session.user.name}</h1>
        </div>
    )
}

export default SideBar
