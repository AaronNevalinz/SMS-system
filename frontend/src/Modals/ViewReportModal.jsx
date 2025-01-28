
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import PropTypes from 'prop-types';

ViewReportModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    recipients: PropTypes.array.isRequired,
};

function ViewReportModal({ isOpen, onClose, title, message, recipients }) {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 flex justify-end">
            <div className="bg-black/60 w-1/2" onClick={onClose}></div>
            <div className="bg-white w-1/2 h-full p-4 text-black rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="border border-gray-400 rounded-full p-1.5 cursor-pointer">
                            <MdArrowBackIos className="text-gray-900 size-3"/>
                        </div>
                        <div className="border border-gray-400 rounded-full p-1.5 cursor-pointer">
                            <MdArrowForwardIos className="text-gray-900 size-3"/>
                        </div>
                    </div>
                    <IoMdClose onClick={onClose} className="text-black size-7 cursor-pointer"/>
                </div>
                <hr className="my-4 border-gray-300" />

                <div className="flex justify-end text-xs     items-end">
                    <button className="border border-red-500 text-red-500 rounded-md px-2 py-0.5 font-semibold">Delete</button>
                </div>

                <div className="my-6 text-sm space-y-2">
                    <h2> <span className="font-semibold">Campaign Title: </span>{title}</h2>
                    <p><span className="font-semibold">Message sent: </span> {message}</p>
                </div>



                <div className="border border-gray-300 rounded-md flex justify-between px-8 py-4">
                    
                    <div className="text-center text-sm">
                        <p className="font-semibold">Total Recipients</p>
                        <p>{recipients.length}</p>
                    </div>
                    <div className="border-l border-gray-300 mx-4"></div>
                    <div className="text-center">
                        <p className="text-sm font-semibold">Success</p>
                        <p className="text-sm">{recipients.length}</p>
                    </div>
                    <div className="border-l border-gray-300 mx-4"></div>
                    <div className="text-center text-sm">
                        <p className="font-semibold">Failed</p>
                        <p>0</p>
                    </div>
                </div>
                {/* Add your report details here */}
                
                <div className="text-sm font-medium mt-6">
                    
                    <table className="w-full text-left table-auto min-w-max shadow-lg rounded-md">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 border-b border-slate-200 bg-accent rounded-tl-md">
                                <p className="leading-none text-white text-sm">To</p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent ">
                                <p className="text-white text-sm leading-none ">Cost</p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent rounded-tr-md">
                                <p className="text-white text-sm leading-none ">Status</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                        recipients.length > 0 ? (
                            recipients.map((recipient, index) => (
                                <tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
                                    <td className="px-4 py-2">
                                        <p className=" text-black text-sm">{recipient.number}</p>
                                    </td>
                                    <td className="px-4 py-1.5">
                                        <p className=" text-black text-sm">{recipient.cost}</p>
                                    </td>
                                    <td className={`px-4 py-1.5 `}>
                                        <p className={`${recipient.status === 'Success' ? 'bg-green-600' : 'bg-yellow-600'}  inline-block px-2 py-0.5 text-xs rounded-md text-black font-medium`}>{recipient.status}</p>
                                    </td>
                                </tr>
                            ))
                        ) : 
                        <tr>
                            <td colSpan="4" className="text-center text-black font-bold text-sm py-2">No campaigns available</td>
                        </tr>
                        }
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}



export default ViewReportModal;