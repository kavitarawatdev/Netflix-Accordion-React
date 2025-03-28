/* eslint-disable no-unused-vars */

import { FaPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { RiCloseLargeLine } from "react-icons/ri";
export const Faq=({currFaq, isActive, handleFaqClick})=>{
    const { id, question, answer } = currFaq;
    return(
        <li className={`flex items-center justify-center text-red-50 w-[100%] text-base hover:cursor-pointer sm:text-2xl ${isActive?"flex-col gap-[1rem]":""}`}
            onClick={handleFaqClick}>
            <div className="flex justify-between items-center w-[100%] p-[1rem] gap-[1rem]  rounded-[0.5rem]  h-fit border-[0.2rem] border-zinc-800 sm:h-[6rem]  sm:p-[2rem] bg-zinc-900  hover:bg-zinc-700">
              <p>{question}</p>
              <button className="font-bold">
                {isActive? <RiCloseLargeLine/> : <FaPlus/>}
              </button>
            </div>      
            <div className={`${isActive? `flex  items-center  opacity-85  w-[100%] bg-zinc-900 text-base px-[2rem] py-[1rem] sm:p-[2rem] sm:text-2xl rounded-[0.5rem]`:""}`}>
                <p className="whitespace-pre-line">{isActive && answer}</p>
            </div>
        </li>
    )
}