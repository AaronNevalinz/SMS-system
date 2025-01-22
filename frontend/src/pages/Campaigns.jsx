import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CampaignTable from "../components/CampaignTable";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

export default function Campaigns() {
    const {campaigns} = useContext(AppContext);
    useEffect(()=>{
        console.log(campaigns);
        
    }, [campaigns]);
  return (
   
    <div className="bg-background min-h-screen w-full">
        <Navbar />
        <div className="flex px-4 pt-16">
        <Sidebar />

        <div className="mx-auto lg:w-[80%] py-10 text-textColor ml-[15%] overflow-y-scroll scrollbar-hide">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-lg text-white font-bold">All Campaigns -  ({campaigns.length})</h1>
                    <div className="flex gap-4 mt-4">
                        <input type="text" placeholder="Search Campaigns" className="border border-accent bg-transparent outline-none py-1.5 px-6 rounded-md text-sm"/>
                        <button className="bg-secondary text-white py-1 px-6 font-bold text-sm rounded-md">Search</button>
                    </div>
                </div>

                <div>
                    <p className=''>
                        <Link to="/create" className="font-bold text-white text-sm mb-8 bg-secondary inline-block px-4 py-2 rounded-md">Create</Link>
                    </p>
                </div>
            </div>


            {/* section for listing all the campaigns */}
            <section className="text-black">
                <CampaignTable />
            </section>

        </div>
        </div>
    </div>
  )
}
