import React from 'react'
import { FaBoxOpen } from "react-icons/fa6";

const Empty = () => {
    return (
        <div className='h-[40vh] flex justify-center items-center w-full'>
            <div className='flex flex-col items-center gap-2 text-slate-600'>
                <FaBoxOpen size={100} />
                <span className='text-3xl'>Empty</span>
            </div>
        </div>
    )
}

export default Empty