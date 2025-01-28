import { Link, useNavigate } from "react-router-dom";
import { logo } from "../assets";
import { IoNotifications } from "react-icons/io5";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const {user, connects, token, setUser, setToken} = useContext(AppContext);
  
  const navigate = useNavigate()

  const handleLogOut = async(e)=>{
    e.preventDefault()
    const res = await fetch('api/logout', {
      method:'POST',
      headers:{
        Authorization:`Bearer ${token}`
      }
    });

    const data = await res.json()
    console.log(data);
    

    if(res.ok){
      setUser(null)
      setToken(null)
      localStorage.removeItem("token")
      navigate('/login')
    }
  }
  return (
    <div className="text-textColor flex items-center bg-background justify-between px-8 border-b border-accent fixed w-full h-16">
        <Link to={'/'}>
          <img src={logo} alt="logo" className="w-36" />
        </Link>
       <div className="flex items-center gap-x-5">
          {user?user.email :''}
          {connects?connects.connects:''}
          <form action="" onSubmit={handleLogOut}>
            <button type="submit">LogOut</button>
          </form>
          <IoNotifications size={28}  className="cursor-pointer"/>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
       </div>
    </div>
  )
}
