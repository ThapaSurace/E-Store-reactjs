import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductSinglePage = () => {
  return (
    <div className="container my-10">
    <div className="flex flex-col items-center md:flex-row gap-6 md:gap-20">
      {/* img  */}
      <div className="md:flex-[1] flex-1">
        <img
          src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703328414i/2784.jpg'
          alt="Elton John by O'Neill"
          className="w-full h-96 aspect-square object-cover object-center rounded-xl shadow-md"
        />
        <div className="mt-4 font-light italic text-lg flex gap-1 justify-center">
          <span>Genre: </span>
          <div className="flex gap-1">
             Arts
          </div>
        </div>
      </div>
      {/* info */}
      <div className="md:flex-[2] flex-1">
        <h1 className="text-3xl font-semibold text-slate-900 mb-3">
        Elton John by O'Neill
        </h1>
        <span className="text-2xl text-slate-900">$100</span>
        <hr className="my-4" />
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900 mr-1">Author:</h3>
            <span>Terry O'Neill</span>
          </div>
          <div className="flex items-center gap-1">
            <h3 className="font-semibold text-gray-900 mr-1">Language:</h3>
            <span>English</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Synopsis</h3>
            <p className="text-slate-600 leading-6 tracking-wide">
            Looking at Terry's photographs is like gazing through a window at the most extraordinary and exciting moments of my life. I'm so glad he was with us throughout the madness: in his evocative and stylish photos he captured those moments as no other photographer could.- Elton JohnElton John and iconic photographer Terry O'Neill worked together for many years, taking in excess of 5,000 photographs. From intimate backstage shots to huge stadium concerts, the photographs in this book represent the very best of this archive, with most of the images being shown here for the first time.O'Neill has drawn on his personal relationship with Elton John to write the book's introduction and captions.",
      author: "Terry O'Neill
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-1 items-start">
          <div className="flex items-center gap-2 my-6">
            <div className="border border-slate-600 p-2 rounded-md cursor-pointer">
              <AiOutlinePlus size={25}  />
            </div>
            <span className="text-2xl">0</span>
            <div className="border border-slate-600 p-2 rounded-md cursor-pointer">
              <AiOutlineMinus size={25}  />
            </div>
          </div>
          <button className="uppercase bg-slate-950 hover:bg-slate-800 hover:shadow-sm text-white font-medium px-4 py-2 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ProductSinglePage;