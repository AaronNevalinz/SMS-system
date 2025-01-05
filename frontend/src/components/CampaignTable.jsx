import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { format } from "date-fns";

const CampaignTable = () => {
    const {campaigns} = useContext(AppContext);

    console.log(campaigns);
    

  return (
    <div className="mt-8">

      <table className="w-full table-auto border-collapse shadow-md rounded-lg">
        <thead>
          <tr className="border-b border-accent">
            <th className="p-2 text-left text-sm font-bold lg:w-[400px]">Name</th>
            <th className="p-4 text-left text-sm font-bold">Status</th>
            <th className="p-4 text-left text-sm font-bold">Audience</th>
            <th className="p-4 text-left text-sm font-bold">Action</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.length > 0 ? campaigns.map((campaign, index) => (
            <tr key={index} className="border-b border-accent">

              <td className="p-2 text-sm">{campaign.name}</td>

              <td className="p-4 text-sm text-gray-800 flex flex-col gap-2">
                <div>
                    <span className="px-2 py-1 text-xs font-semibold text-white inline-block bg-flamePea rounded-md">
                    {campaign.status}
                    </span>
                </div>
                <div>
                    <span className="text-xs text-gray-500">{format( new Date(campaign.created_at), 'MMMM d, yyyy, h:mm a') }</span>
                </div>
              </td>

              <td className="p-4 text-sm">
                <div>
                    <p className="text-xs capitalize">{campaign.audience}</p>
                </div>
                {/* <span className="text-xs text-gray-500">{campaign.recipients}</span> */}
              </td>

              <td className="p-4 text-xs text-blue-500 cursor-pointer">View report</td>
            </tr>
          )) : <tr><td colSpan="4" className="text-center text-sm py-4">No campaigns available</td></tr>}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignTable;
