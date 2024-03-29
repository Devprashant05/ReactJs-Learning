import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

function StateProject() {
    const [val, setval] = useState(false)
    return (
        <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
            <div className=" relative w-96 h-64 bg-zinc-600 rounded flex overflow-hidden">
                <img className={`w-full h-full transition-all duration-500 object-cover shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1505421031134-e57263cae630?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBvcnRyYWl0JTIwd29tZW58ZW58MHwwfDB8fHww" alt="" />
                <img className={`w-full h-full transition-all duration-500 object-cover shrink-0 ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src='https://images.unsplash.com/photo-1474901879171-d6f34b3a99b0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTZ8fHBvcnRyYWl0JTIwd29tZW58ZW58MHwwfDB8fHww' alt="" />
                <span onClick={() => setval(() => !val)} className='absolute w-10 h-10 bg-[#dadada7b] flex items-center justify-center bottom-3 rounded-full left-1/2 -translate-x-[50%] -translate-y-[50%] cursor-pointer transition-all duration-500'>
                    {val === false ? <FaArrowRight color='white' /> : <FaArrowLeft color='white' />}
                </span>
            </div>
        </div>
    )
}

export default StateProject
