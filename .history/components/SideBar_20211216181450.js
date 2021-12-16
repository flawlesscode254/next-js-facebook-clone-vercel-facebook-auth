import { useSession } from "next-auth/react";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    
}

import SidebarRow from "./SidebarRow";

function SideBar() {
    const { data: session } = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow />
        </div>
    )
}

export default SideBar
