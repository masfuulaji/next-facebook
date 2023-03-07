import { useSession } from "next-auth/react";
import React from "react";

import { UserIcon } from "@heroicons/react/24/solid";

import SidebarRow from "./SidebarRow";

function Sidebar() {
    const { data: session, status } = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UserIcon} title="Friend" />
            <SidebarRow Icon={UserIcon} title="Friend" />
            <SidebarRow Icon={UserIcon} title="Friend" />
            <SidebarRow Icon={UserIcon} title="Friend" />
        </div>
    );
}

export default Sidebar;
