import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import Button from "../ui/Button";
import SubHeading from "../ui/SubHeading";
import { Link } from "react-router-dom";
import { computerGuy } from "../assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Main() {
    const {connects}=useContext(AppContext)
  return (
    <>
        <SubHeading text='Quick Actions'/>

        <div className="flex gap-4  mt-6 flex-col md:flex-row flex-wrap">
            <Button icon={<BiSolidMessageRounded />} textAction='Create SMS Campaign' link='/create'/>
            <Button link={'/add-contacts'} textAction={'Import Contacts'} icon={<FaUsers />}/>
            <Button textAction={'Avaiable Connects'} connects={connects? connects :''} icon={<FaUsers/>}/>
        </div>

        <div className="mt-6">
            <SubHeading text='SMS Performance'/>
            <div className="bg-accent px-4 py-2 rounded-lg mt-4 h-44 text-sm">
                {/* <p className="text-sm">No SMS campaign has been sent yet. Create a new campaign to get started.</p> */}
                <div className="flex justify-between items-center text-sm font-medium">
                    <p>Compared last 60 days</p>
                    <div>
                        <ul className="flex gap- bg-primary py-1 px-2 rounded-md">
                            <li className="hover:bg-accent px-2 py-1 rounded-md cursor-pointer">7days</li>
                            <li className="hover:bg-accent px-2 py-1 rounded-md cursor-pointer">30days</li>
                            <li className="hover:bg-accent px-2 py-1 rounded-md cursor-pointer">60days</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-20">
                    <div>
                        <p className="text-sm mb-2 font-semibold">Delieved</p>
                        <p className="text-5xl font-light">100%</p>
                    </div>
                    <div>
                        <p className="text-sm mb-2 font-semibold">Failed</p>
                        <p className="text-5xl font-light">0%</p>
                    </div>
                    <div>
                        <p className="text-sm mb-2 font-semibold">Rejected</p>
                        <p className="text-5xl font-light">0%</p>
                    </div>
                </div>
            </div>
        </div>  


        <div className="mt-6 grid grid-cols-4 gap-10">
            <div className="col-span-4 md:col-span-1 relative">
                <SubHeading text='Audience'/>
                <div className="bg-accent p-4 rounded-lg mt-4 h-56 text-sm">
                   <p className="text-center md:text-[17px] font-bold text-lg md:font-medium">Grow your business client audience</p>
                   <div className="flex justify-center">
                        <Link to="/add-contacts" className="bg-secondary font-bold px-4 py-2 rounded-md text-white mt-4">Add Contacts</Link>
                   </div>
                   <img src={computerGuy} className="absolute bottom-0 md:right-14 w-36 md:w-24" alt="" />
                </div>
            </div>
            <div className="col-span-4 md:col-span-3">
                <SubHeading text='Recent Campaigns Performance'/>
                <div className="bg-accent p-4 rounded-lg mt-4 h-56 text-sm">
                    <ul className="grid grid-cols-4 gap-2">
                        <li className="col-span-2 font-semibold">Name</li>
                        <li className="col-span-1 font-semibold">Type</li>
                        <li className="cols-span-1 font-semibold">Recipients</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-accentGray">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-accentGray">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-accentGray">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-accentGray">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </>
  )
}
