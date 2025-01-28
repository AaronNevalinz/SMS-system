import { Link, useNavigate } from "react-router-dom";
import { google_logo, logo, sign_in_img } from "../assets";
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function SignUp() {

    const {setToken, user} = useContext(AppContext);
    console.log(user);
    

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: ''
    });

    const [errors, setErrors] = useState({});

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/register',{
            method:'POST',
            body:JSON.stringify(formData) // convert from object to json formart
        })

        const data = await res.json()

        if(data.errors || !res.ok){
            setErrors(data.errors)
            console.log(data);
            
          } else {
            console.log(data.access_token);            
            localStorage.setItem('token', data.access_token);
            setToken(data.access_token);
            // navigate('/');
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
            <h4 className="font-black text-6xl mb-4">Sign Up</h4> 
            
            <p className="text-gray-400 text-center">Create your account to start your sending of bulk sms to your customers, don&apos;t   <br />sleep on your customers. {user?user.name:''} </p>
        </div>
        <div className="bg-[#171717] flex-1 lg:m-4 rounded-lg relative z-20">
           <div className="w-[500px] mx-auto md:mt-10 lg:mt-24 lg:space-y-8">
                <div className="">
                    <h4 className="uppercase text-xl font-bold">Sign Up</h4>
                    <p className="text-gray-400">Create your account to start your sending of bulk sms to your customers, don&apos;t   sleep on your customers. </p>
                </div>

                <form action="" className="flex flex-col gap-y-6 " onSubmit={handleRegister}>
                    <div>
                        <input type="text" className="border py-2 px-4 outline-none bg-transparent w-full border-gray-400 rounded-lg" placeholder="Enter your name" onChange={(e)=>setFormData({...formData, name:e.target.value})} />
                        {errors.name && <p className="text-red-500">{errors.name[0]}</p>}
                    </div>
                    <div>
                        <input type="email" className="border py-2 outline-none px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your email" onChange={(e)=>setFormData({...formData, email:e.target.value})} />
                        {errors.email && <p className="text-red-500">{errors.email[0]}</p>}
                    </div>
                    <div>
                        <input type="phone" className="border py-2 outline-none px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your Phone Number" onChange={(e)=>setFormData({...formData, phone:e.target.value})}   />
                        {errors.phone && <p className="text-red-500">{errors.phone[0]}</p>}
                    </div>
                    <div>
                        <input type="password" className="border outline-none py-2 px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your password" onChange={(e)=>setFormData({...formData, password:e.target.value})} />
                        {errors.password && <p className="text-red-500">{errors.password[0]}</p>}
                    </div>

                    <input type="password" className="border outline-none py-2 px-4 bg-transparent w-full border-gray-400 rounded-lg"  placeholder="Enter your password" onChange={(e)=>setFormData({...formData, password_confirmation:e.target.value})} />

                    <div>
                        <button type="submit" className="bg-gradient-to-r text-black px-8 py-2 font-bold rounded-lg from-red-500 to-purple-500">Sign up</button>
                    </div>
                </form>

                <div>
                    <p className="text-center uppercase underline tracking-widest font-semibold mb-1">OR sign in using</p>
                    <div className="flex justify-center">
                       <a href="">
                            <img src={google_logo} className="w-20" alt="" />
                       </a>
                    </div>
                    <p>
                        Already have an account <Link to="/login" className="bg-gradient-to-r from-orange-500 font-bold to-purple-500 text-transparent bg-clip-text">Login</Link>
                   </p>
                </div>

           </div>

        </div>
    </div>
  )
}
