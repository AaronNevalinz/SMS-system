/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({textAction, icon, link}) {
  return (
    <Link to={link} className="bg-[#111999] md:px-4 md:py-4 py-6 rounded-md flex items-center justify-center">
        <div className="flex gap-2 items-center">
          <span className="text-4xl md:text-2xl">{icon}</span>
          <span className="md:text-sm font-bold text-lg">{textAction}</span>
        </div>
    </Link>
  )
}
