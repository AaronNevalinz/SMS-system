/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function Button({textAction, icon, link}) {
  return (
    <Link to={link} className="bg-accent px-6 py-4 rounded-full flex gap-2 items-center">
        <span>{icon}</span>
        <span>{textAction}</span>
    </Link>
  )
}
