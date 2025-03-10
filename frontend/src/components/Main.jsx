import { BiSolidMessageRounded } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import Button from "../ui/Button";
import SubHeading from "../ui/SubHeading";
import { Link } from "react-router-dom";
import { computerGuy } from "../assets";

export default function Main() {
  return (
    <div className="mx-auto lg:w-2/3 py-10 text-textColor ml-[28%] overflow-y-scroll scrollbar-hide">
        <SubHeading text='Quick Actions'/>

        <div className="flex gap-10 mt-6">
            <Button icon={<BiSolidMessageRounded size={20}/>} textAction='Create SMS Campaign' link='/create'/>
            <Button link={'/add-contacts'} textAction={'Import Contacts'} icon={<FaUsers size={20}/>}/>
        </div>

        <div className="mt-6">
            <SubHeading text='SMS Performance'/>
            <div className="bg-accent px-4 py-2 rounded-lg mt-4 h-44 text-sm">
                {/* <p className="text-sm">No SMS campaign has been sent yet. Create a new campaign to get started.</p> */}
                <div className="flex justify-between items-center text-xs font-medium">
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
            <div className="col-span-1 relative">
                <SubHeading text='Audience'/>
                <div className="bg-accent p-4 rounded-lg mt-4 h-56 text-sm">
                   <p className="text-center text-[17px] font-medium">Grow your business client audience</p>
                   <div className="flex justify-center">
                        <Link to="/add-contacts" className="bg-primary px-4 py-2 rounded-full mt-4">Add Contacts</Link>
                   </div>
                   <img src={computerGuy} className="absolute bottom-0 right-14 w-24" alt="" />
                </div>
            </div>
            <div className="col-span-3">
                <SubHeading text='Recent Campaigns Performance'/>
                <div className="bg-accent p-4 rounded-lg mt-4 h-56 text-sm">
                    <ul className="grid grid-cols-4 gap-2">
                        <li className="col-span-2 font-semibold">Name</li>
                        <li className="col-span-1 font-semibold">Type</li>
                        <li className="cols-span-1 font-semibold">Recipients</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-secondary">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-secondary">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-secondary">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>

                    <ul className="grid grid-cols-4 gap-2 py-3 border-b border-gray-700">
                        <li className="col-span-2 text-secondary">Todays the day: Join us in Empowering lifes...</li>
                        <li className="col-span-1">Regular</li>
                        <li className="cols-span-1">1456</li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
  )
}
