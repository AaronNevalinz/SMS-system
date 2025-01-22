/* eslint-disable react/prop-types */
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GoBack({link, text}) {
  return (
    <Link to={link} className="text-white bg-[#404040] px-4 py-1 rounded-lg text-sm font-medium">
          <FaLongArrowAltLeft className="inline-block mr-2" />
          <span>{text}</span>
    </Link>
  )
}
