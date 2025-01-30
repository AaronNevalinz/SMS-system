import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import CampaignTable from "../components/CampaignTable";
import { AppContext } from "../context/AppContext";

export default function CampaignLayouts() {
    
    const {campaigns} = useContext(AppContext);

    useEffect(()=>{
        console.log(campaigns);
        
    }, [campaigns]);

  return (
   
    <div className="p-4 sm:p-7 min-h-[calc(100vh-145px)]">
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
  )
}
