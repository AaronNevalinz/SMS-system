import { MdKeyboardArrowDown, MdOutlineSpaceDashboard } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSunnyOutline, IoSearchSharp } from "react-icons/io5"
import { avatar } from "../assets";
export default function TopBarLayout() {
  return (
    <div>
         <div className="border-b border-black/10 dark:border-white/10 py-[22px] px-7 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <button type="button" className="text-black dark:text-white">
                        <MdOutlineSpaceDashboard className="size-5" />
                    </button>
                    
                    <div className="hidden sm:block">
                        <nav aria-label="breadcrumb" className="w-full py-1 px-2">
                            <ol className="flex space-x-3">
                                <li className="flex items-center">
                                    <a href="javaScript:;" className="flex items-center text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white">Dashboard</a>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <span className="text-black/40 dark:text-white/40">/</span>
                                    <a href="javaScript:;" className="flex items-center px-3 text-black dark:text-white">Default</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <form className="md:flex items-center hidden">
                        <label className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-[6px] pointer-events-none">
                                <IoSearchSharp className="text-white/40"/>
                            </div>
                            <input type="text" id="voice-search" className="bg-black/5 outline-none dark:bg-white/10 border-0 text-black dark:text-white/40 text-sm rounded-lg block max-w-[160px] w-full px-[26px] p-1 focus:ring-0 focus:outline-0" placeholder="Search..." required />
                            <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
                               
                            </button>
                        </div>
                    </form>
                    <div className="flex items-center gap-2">
                        <div>
                            <a className="text-black dark:text-white">
                                <IoSunnyOutline className="size-5"/>
                            </a>
                        </div>
                        <button type="button" className="relative w-7 h-7 p-1 text-black dark:text-white">
                            <IoMdNotificationsOutline className="text-white size-5  "/>
                            <span className="flex absolute w-3 h-3 right-px top-[5px]">
                                <span className="animate-ping absolute -left-[3px] -top-[3px] inline-flex h-full w-full rounded-full bg-black/50 dark:bg-white/50 opacity-75"></span>
                                <span className="relative inline-flex rounded-full w-[6px] h-[6px] bg-black dark:bg-white"></span>
                            </span>
                        </button>
                        <div className="profile">
                            <button type="button" className="flex items-center gap-1.5 xl:gap-0">
                                <img className="h-7 w-7 rounded-full xl:mr-2" src={avatar} alt="Header Avatar" />
                                <MdKeyboardArrowDown className="text-white"/>
                            </button>
                            {/* <ul >
                                <li>
                                    <div className="flex items-center !p-1">
                                        <div className="flex-none">
                                            <img className="h-7 w-7 rounded-full object-cover" src="assets/images/byewind-avatar.png" alt="image" />
                                        </div>
                                        <div className="pl-2">
                                            <h4 className="text-sm text-black dark:text-white font-medium leading-none">Stevens</h4>
                                            <a className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs" href="javaScript:;">Email@gmail.com</a>
                                        </div>
                                    </div>
                                </li>
                                <li className="h-px bg-black/5 block my-1"></li>
                                <li>
                                    <a href="javaScript:;" className="flex items-center">
                                       
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="javaScript:;" className="flex items-center">
                                       
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a href="javaScript:;" className="flex items-center">
                                        
                                        Messages
                                    </a>
                                </li>
                                <li>
                                    <a href="javaScript:;" className="flex items-center">
                                       

                                        Support
                                    </a>
                                </li>
                                <li className="h-px bg-black/5 block my-1"></li>
                                <li>
                                    <a href="javaScript:;" className="text-black dark:text-white flex items-center">
                                       
                                        Sign Out
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
