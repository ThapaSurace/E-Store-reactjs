import React from 'react'

const EditProduct = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
    <h1 className="text-slate-900 font-semibold mb-4 text-2xl text-center">
      Update Product
    </h1>
    <form className="flex flex-col gap-3">
      <div>
        <label htmlFor="file">Image</label>
        <input type="file" id="file" name="file" />
      </div>
      <div className="flex gap-4 w-full">
        <div className="flex-1">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div className="flex-1">
          <label htmlFor="author">Author</label>
          <input type="text" id="author" name="author" />
        </div>
      </div>
      <div>
        <label htmlFor="synopsis">Synopsis</label>
        <textarea rows="5" type="text" id="synopsis" name="synopsis" />
      </div>
      <div className="flex w-full gap-4">
        <div className="flex-1">
          <label htmlFor="genre">Genre</label>
          <input type="text" id="genre" name="genre" />
        </div>
        <div className="flex-1">
          <label htmlFor="language">Language</label>
          <input type="text" id="language" name="language" />
        </div>
      </div>
      <div className="flex w-full gap-4">
        <div className="flex-1">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" name="price" />
        </div>
        <div className="flex-1">
          <label htmlFor="stock">Stock</label>
          <input type="text" id="stock" name="stock" />
        </div>
      </div>
      <button
        type="submit"
        className="bg-teal-600 mt-2 w-full hover:bg-teal-700 disabled:cursor-not-allowed"
      >
        Update
      </button>
    </form>
  </div>
  )
}

export default EditProduct