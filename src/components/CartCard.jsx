import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const CartCard = () => {
  return (
    <div className="flex justify-between gap-10 p-4  border-b  relative cursor-pointer">
      <div className="flex gap-2">
        <div className="h-32 w-32">
          <img
            src='https://books.bizmandala.com/media/books/9789386148087/image_I04m4AO.webp'
            alt="image"
            className="h-full w-full object-cover object-center rounded-md"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-semibold">The Icelandic Voyage</span>
          <span className="text-sm">$100</span>
          <div>
            <span className="text-sm text-gray-400">English</span>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-4 items-center">
        <div className="flex items-center gap-2">
          <div
          
            className=" p-2 border border-slate-500 cursor-pointer rounded-md"
          >
            <AiOutlinePlus className="" />
          </div>
          <span>0</span>
          <div
            className=" p-2 border border-slate-500 cursor-pointer rounded-md"
          >
            <AiOutlineMinus className="cursor-pointer" />
          </div>
        </div>
        <span className="text-light text-xl">
          $200
        </span>
      </div>
      <div
        className="cursor-pointer hover:text-red-500"
      >
        <RxCross2 size={25} />
      </div>
    </div>
  )
}

export default CartCard