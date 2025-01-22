import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { format } from "date-fns";
import ViewReportModal from "../Modals/ViewReportModal";

const CampaignTable = () => {
    const {campaigns} = useContext(AppContext);

    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => {
      setIsOpen(false);
    };

    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const handleViewReport = (campaign) => {
      setSelectedCampaign(campaign);
      setIsOpen(true);
    };

    useEffect(()=>{
      console.log(campaigns);
    }, [campaigns])
    
    

  return (
    <div className="mt-8">


      <div className="relative flex flex-col w-full h-full overflow-scroll  bg-white shadow-md rounded-lg bg-clip-border">
                    <table className="w-full text-left table-auto min-w-max">
                        <thead>
                        <tr>
                            <th className="px-4 py-3 border-b border-slate-200 bg-accent">
                              <p className="leading-none text-white text-sm font-bold">
                                <label className="flex items-center">
                                  <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 border-white border-2 rounded-sm focus:ring-indigo-500" />
                                </label>
                              </p>
                            </th>
                            <th className="px-4 py-3 border-b border-slate-200 bg-accent">
                            <p className="leading-none text-white text-sm font-bold">
                            Name
                            </p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                            <p className="text-white text-sm font-bold leading-none ">
                            Status
                            </p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                            <p className="text-white text-sm font-bold leading-none ">
                            Message
                            </p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                            <p className="text-white text-sm font-bold leading-none">
                            Recipient Count
                            </p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                            <p className="text-white text-sm font-bold leading-none ">
                            Action
                            </p>
                            </th>
                            
                        </tr>
                        </thead>
                        <tbody>
                          {
                            campaigns.length > 0 ? campaigns.map((campaign, index) => (
                              <tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
                                <td className="px-4">
                                  <p className="leading-none text-white text-sm font-bold">
                                    <label className="flex items-center">
                                      <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600 border-white border-2 rounded-sm focus:ring-indigo-500" />
                                    </label>
                                  </p>
                                </td>
                              
                                <td className="px-4">
                                  <p className=" text-black text-sm font-bold">{campaign.title}</p>
                                </td>

                                <td className="px-4 py-1.5">
                                  <div>
                                    <span className={`px-2 py-0.5 text-xs font-medium text-white inline-block rounded-md ${campaign.status === 'Sent' ? 'bg-green-900': 'bg-yellow-500'}`}>
                                    {campaign.status}
                                    </span>
                                  </div>
                                  <div>
                                      <span className="text-xs font-medium text-black">{format( new Date(campaign.created_at), 'MMMM d, yyyy, h:mm a') }</span>
                                  </div>
                                </td>
                                  <td className="p-4 py-1.5">
                                    <div>
                                        <p className="text-black text-sm font-bold">{campaign.message}</p>
                                    </div>
                                  </td>
                                  <td className="p-4 py-1.5">
                                    <div>
                                        <p className="text-black text-sm font-bold">{campaign.recipients.length}</p>
                                    </div>
                                  </td>
                                
                                  <td className="p-4  ">
                                    <span  onClick={() => handleViewReport(campaign)} className="text-xs font-bold cursor-pointer bg-[#404040] text-white px-2 py-1 rounded-md"> view </span>
                                  </td>
                              </tr>
                            )): <tr><td colSpan="4" className="text-center text-black font-bold text-sm py-2">No campaigns available</td></tr>
                            
                          }
                           
                        </tbody>
                    </table>
                </div>

                <ViewReportModal isOpen={isOpen} onClose={onClose} title={selectedCampaign?.title} recipients={selectedCampaign?.recipients} />
    </div>
  );
};

export default CampaignTable;
