import { Link } from 'react-router-dom';
import { TiHome } from "react-icons/ti";
import { MdCampaign, MdSpatialAudioOff } from "react-icons/md";
export default function Sidebar () {
  return (
    <div className="text-textColor border-r border-accent py-4 h-full hidden lg:block lg:w-[200px] pr-2 fixed">
      <p className=''>
        <Link to="/create" className="font-bold mb-8 bg-secondary text-white inline-block px-4 text-sm py-2 rounded-md">Create</Link>
      </p>
      
      <ul className='space-y-2 font-bold text-white text-sm'>
        <li >
          <Link to="/" className='flex items-center gap-2 hover:bg-accent py-2 rounded-md hover:text-[#142fff] transition-all px-4 '>
            <TiHome className="text-lg" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/campaigns" className='flex items-center gap-2 hover:bg-accent py-2 rounded-md hover:text-[#142fff] transition-all px-4 '>
            <MdCampaign className="text-lg" />
            <span>Campaigns</span>
          </Link>
        </li>
        <li>
          <Link to="/audience" className='flex items-center gap-2 hover:bg-accent py-2 rounded-md hover:text-[#142fff] transition-all px-4 '>
            <MdSpatialAudioOff className="text-lg" />
            <span>Audience</span>
          </Link>
        </li>
        <li>
          <Link to="/audience" className='flex items-center gap-2 hover:bg-accent py-2 rounded-md hover:text-[#142fff] transition-all px-4 '>
            <MdSpatialAudioOff className="text-lg" />
            <span>My ChatBots</span>
          </Link>
        </li>
        <li>
          <Link to="/audience" className='flex items-center gap-2 hover:bg-accent py-2 rounded-md hover:text-[#142fff] transition-all px-4 '>
            <MdSpatialAudioOff className="text-lg" />
            <span>My Reports</span>
          </Link>
        </li>
      </ul>

      <div className='bg-accent py-4 px-8 rounded-lg text-sm absolute bottom-20 space-y-2'>
        <p className='text-white font-bold text-sm'>Connects: 120</p>
        <p className='text-xs  underline text-flamePea font-semibold cursor-pointer'>
          <span>Buy Connects</span>
        </p>
      </div>
    </div>
  );
};