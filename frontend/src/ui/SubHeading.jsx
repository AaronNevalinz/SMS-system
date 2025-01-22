/* eslint-disable react/prop-types */
import { RiErrorWarningFill } from "react-icons/ri";

export default function SubHeading({text}) {
  return (
    <div>
        <p className="flex gap-2 items-center">
            <span className="font-bold text-sm  ">{text}</span>
            <RiErrorWarningFill className=" text-gray-400 size-5" />
        </p>
    </div>
  )
}
