import { Outlet } from "react-router-dom";
import TopBarLayout from "../components/TopBarLayout";
import SideBarLayout from "../components/SiderBarLayout";

export default function Layout() {
  return (
   <div className="flex">
           <SideBarLayout />
           <div className="main-content flex-1 pl-[212px] bg-black">
               <TopBarLayout />
               <div className="h-[calc(100vh-73px)] overflow-y-auto overflow-x-hidden text-gray-300">
                    <Outlet />
               </div>
           </div>
       </div>
  )
}

