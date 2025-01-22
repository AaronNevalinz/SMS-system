import { Link, useNavigate } from "react-router-dom";
import { google_logo, logo, sign_in_img } from "../assets";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";

export default function Login() {

    const {setToken} = useContext(AppContext);

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/login',{
            method:'POST',
            body:JSON.stringify(formData)
        })

        const data = await res.json()

        if(data.errors){
            setErrors(data.errors)
          } else {
            localStorage.setItem('token', data.token);
            setToken(data.token);
            navigate('/');
          }
        
        
    }

  return (
    <div className="bg-black text-white h-screen w-full flex relative font-hanken">

        <div className="absolute top-0 h-screen w-full">
            <img src={sign_in_img} alt="" className="object-cover h-full w-full" />
        </div>
        <div className="bg-black/70 absolute z-10 w-full h-full"></div>



        <div className="flex flex-col items-center justify-center flex-1 relative z-20">
            <img src={logo} className="absolute top-0 left-0 w-36 mt-8 ml-8" alt="" />
            <h4 className="font-black text-6xl mb-4">Login</h4>
            <p className="text-gray-400 text-center">Create your account to start your sending of bulk sms to your customers, don&apos;t   <br />sleep on your customers. </p>
        </div>
        <div className="bg-[#171717] flex-1 m-4 rounded-lg relative z-20">
           <div className="w-[450px] mx-auto mt-24 space-y-8">
                <h4 className="uppercase text-xl font-bold">Login In</h4>
                <form action="" className="flex flex-col gap-y-5" onSubmit={handleLogin}>
                    <div>
                        <input type="email" className="border py-2 outline-none px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your email" onChange={(e)=>setFormData({...formData, email:e.target.value})} />
                        {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
                    </div>
                    <div>
                        <input type="password" className="border outline-none py-2 px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your password" onChange={(e)=>setFormData({...formData, password:e.target.value})} />
                        {errors.password && <p className="text-red-500">{errors.password[0]}</p>}
                    </div>

                    <div>
                        <button className="bg-gradient-to-r text-black px-8 py-2 font-bold rounded-lg from-red-500 to-purple-500">Login</button>
                    </div>
                </form>
                <div>
                    <p className="text-center uppercase underline tracking-widest font-semibold mb-2">OR sign in using</p>
                    <div className="flex justify-center">
                       <a href="">
                            <img src={google_logo} className="w-24" alt="" />
                       </a>
                    </div>
                    <p>
                        Don&lsquo;t have an account <Link to="/signup" className="bg-gradient-to-r from-orange-500 font-bold to-purple-500 text-transparent bg-clip-text">Sign Up</Link> 
                    </p>
                </div>
           </div>

        </div>
    </div>
  )
}
