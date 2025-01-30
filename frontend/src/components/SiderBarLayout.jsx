import { MdSpatialAudioOff } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBarLayout() {
  return (
    <div>
        <nav className="sidebar fixed top-0 bottom-0 z-40 flex-none w-[212px] border-r border-black/10 dark:border-white/10 transition-all duration-300">
            <div className="bg-white dark:bg-black h-full">
                {/* Start of the logo */}
                    <div className="flex py-3 px-4">
                        <Link className='main-logo flex-1 w-full' to='/'>
                            <img src="assets/images/logo.svg" alt="logo" className="block dark:hidden" />
                            {/* <img src="assets/images/dark-logo.svg" alt="logo" className="hidden dark:block" /> */}
                            <h2 className="text-yellow-600 font-bold">app.zeemi.io</h2>
                        </Link>
                    </div>
                {/* end of logo */}
                
                {/* start meun */}
                <ul className="relative h-[calc(100vh-58px)] flex flex-col gap-1 overflow-y-auto overflow-x-hidden p-4 py-0">
                    <li className="menu nav-item">
                        <a className="nav-link group text-black dark:text-white">
                            <div className="flex items-center">
                                <span className="pl-1">Dashboard</span>
                            </div>
                        </a>
                        {/* <ul className="sub-menu flex flex-col gap-1 text-black dark:text-white/80">
                            <li>
                                <Link className='active' to='/'>Default</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/ecommerce'>eCommerce</Link>
                            </li>
                        </ul> */}
                    </li>

                    <li className="menu nav-item">
                        <Link to={'/campaigns'}  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Campaigns</span>
                            </div>
                        </Link>
                        
                    </li>

                    <li className="menu nav-item">
                        <Link to={'/audience'}  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center gap-x-3">
                                <MdSpatialAudioOff className="text-lg" />
                                <span>Audience</span>
                            </div>
                           
                        </Link>
                    </li>
                    <li className="menu nav-item">
                        <a  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Elements</span>
                            </div>
                            
                        </a>
                    </li>

                    <li className="menu nav-item">
                        <a  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Charts</span>
                            </div>
                        </a>
                    </li>

                    <li className="menu nav-item">
                        <a  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Widgets</span>
                            </div>
                        </a>
                    </li>

                    <li className="menu nav-item">
                        <a  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Font Icons</span>
                            </div>
                        </a>
                    </li>

                    <li className="menu nav-item">
                        <a  className="nav-link group active text-black dark:text-white">
                            <div className="flex items-center">
                                
                                <span className="pl-1">Drag & Drop</span>
                            </div>
                        </a>
                    </li>

                    
                </ul>
            </div>
        </nav>
    </div>
  )
}
