/* eslint-disable react/prop-types */
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function GoBack({link, text}) {
  return (
    <Link to={link} className="text-secondary text-xs font-bold">
          <FaLongArrowAltLeft className="inline-block mr-4" />
          <span>{text}</span>
    </Link>
  )
}
