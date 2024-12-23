import { Link } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { MdCampaign, MdSpatialAudioOff } from "react-icons/md";
export default function Sidebar () {
  return (
    <div className="text-textColor border-r border-accent py-4 h-full  w-[12%] fixed">
      <p className=''>
        <Link to="/create" className="font-medium mb-8 bg-primary inline-block px-8 py-2 rounded-full">Create</Link>
      </p>
      <ul className='space-y-8'>
        <li >
          <Link to="/" className='flex items-center gap-2'>
            <TiHome className="text-2xl" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/campaigns" className='flex items-center gap-2'>
            <MdCampaign className="text-2xl" />
            <span>Campaigns</span>
          </Link>
        </li>
        <li>
          <Link to="/audience" className='flex items-center gap-2'>
            <MdSpatialAudioOff className="text-2xl" />
            <span>Audience</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};