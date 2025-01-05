import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CampaignTable from "../components/CampaignTable";

export default function Campaigns() {
  return (
   
    <div className="bg-background min-h-screen w-full">
        <Navbar />
        <div className="flex px-24 pt-16">
        <Sidebar />

        <div className="mx-auto lg:w-2/3 py-10 text-textColor ml-[28%] overflow-y-scroll scrollbar-hide">
            <div className="flex justify-between items-cente">
                <div>
                    <h1>All Campaigns</h1>
                    <div className="flex gap-4 mt-4">
                        <input type="text" placeholder="Search Campaigns" className="border border-secondary bg-transparent outline-none py-1 px-6 text-sm rounded-full"/>
                        <button className="bg-primary text-white py-1 px-4 text-sm font-medium rounded-full">Search</button>
                    </div>
                </div>

                <div>
                    <p className=''>
                        <Link to="/create" className="font-medium mb-8 bg-secondary inline-block px-8 py-2 rounded-full">Create</Link>
                    </p>
                </div>
            </div>


            {/* section for listing all the campaigns */}
            <section>
                <CampaignTable />
            </section>

        </div>
        </div>
    </div>
  )
}
