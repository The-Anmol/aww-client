
import React, { useState } from 'react'
import { FiChevronDown } from "react-icons/fi"

export default function Collapse({ title, children }) {



    const [ open, setOpen ] = useState(false);
    const toggle = () => setOpen(!open);
    return (
        <div className={`${open ? "divide-y" : ""} divide-gray-500 bg-gray-200 rounded-md`} >
            <div onClick={toggle} className='flex justify-between items-center  px-4 pt-4 pb-2' >
                {title}
                <span className={open ? "rotate-180" : "rotate-0"} >
                    <FiChevronDown />
                </span>
            </div>
            <div className={` ${open ? " px-4 pt-2 pb-4" : "h-0 overflow-hidden"}`} >
                {children}
            </div>
        </div>
    )
}
