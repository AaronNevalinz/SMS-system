import { Link } from "react-router-dom";
import { logo } from "../assets";
import { IoNotifications } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className="text-textColor flex items-center bg-background justify-between px-8 border-b border-accent fixed w-full h-16">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-36" />
        </Link>
       <div className="flex items-center gap-x-5">
          <IoNotifications size={28}  className="cursor-pointer"/>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
       </div>
    </div>
  )
}
