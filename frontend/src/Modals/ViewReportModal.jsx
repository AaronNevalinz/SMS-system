
import { IoMdClose } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import PropTypes from 'prop-types';

ViewReportModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    recipients: PropTypes.array.isRequired,
};

function ViewReportModal({ isOpen, onClose, title, recipients }) {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 flex justify-end">
            <div className="bg-black/50 w-1/2" onClick={onClose}></div>
            <div className="bg-white w-2/3 h-full p-4 text-black">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="border border-gray-400 rounded-full p-1.5 cursor-pointer">
                            <MdArrowBackIos className="text-gray-700 size-4"/>
                        </div>
                        <div className="border border-gray-400 rounded-full p-1.5 cursor-pointer">
                            <MdArrowForwardIos className="text-gray-700 size-4"/>
                        </div>
                    </div>
                    <IoMdClose onClick={onClose} className="text-black size-7 cursor-pointer"/>
                </div>
                <hr className="my-4 border-gray-300" />
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {/* Add your report details here */}
                
                <div className="text-sm font-medium">
                    <p className="">{recipients.length} </p>
                    
                    <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="px-4 py-3 border-b border-slate-200 bg-accent">
                                <p className="leading-none text-white text-sm font-bold">To</p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                                <p className="text-white text-sm font-bold leading-none ">Status</p>
                            </th>
                            <th className="px-4 border-b border-slate-200 bg-accent">
                                <p className="text-white text-sm font-bold leading-none ">Status</p>
                            </th>
                        </tr>
                    </thead>
                    <tbody> 
                        {
                        recipients.length > 0 ? (
                            recipients.map((recipient, index) => (
                                <tr key={index} className="hover:bg-slate-50 border-b border-slate-200">
                                    <td className="px-4 py-1.5">
                                        <p className=" text-black text-sm font-bold">{recipient.number}</p>
                                    </td>
                                    <td className="px-4 py-1.5">
                                        <p className=" text-black text-sm font-bold">{recipient.cost}</p>
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