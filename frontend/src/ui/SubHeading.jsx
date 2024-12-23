/* eslint-disable react/prop-types */
import { RiErrorWarningFill } from "react-icons/ri";

export default function SubHeading({text}) {
  return (
    <div>
        <p className="flex gap-2 items-center">
            <span className="font-bold">{text}</span>
            <RiErrorWarningFill className=" text-red-500" />
        </p>
    </div>
  )
}
