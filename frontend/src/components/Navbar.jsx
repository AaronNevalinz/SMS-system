import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Navbar() {
  return (
    <div className="text-textColor flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-48" />
        </Link>
        <div className="w-10 h-10 bg-secondary rounded-full"></div>
    </div>
  )
}
