import React from 'react'

const CheckOutCard = ({totalPrice}) => {
  
  return (
    <div>
      <h1 className="font-semibold text-xl text-centre mb-6">ORDER SUMMARY</h1>
      <div className="flex justify-between mb-6">
        <span className="text-semibold">Subtotal</span>
        <span>$ {totalPrice}</span>
      </div>
      <div className="flex justify-between mb-6">
        <span className="text-semibold">Estimated Shipping</span>
        <span className="text-green-600">Free</span>
      </div>
      <div className="flex justify-between mb-6">
        <span className="text-semibold">Shipping Discount</span>
        <span className="text-green-600">Free</span>
      </div>
      <div className="flex justify-between mb-6">
        <span>Total</span>
        <span className="font-semibold">$ {totalPrice}</span>
      </div>
      <button className="w-full p-2 bg-slate-950 text-white font-medium rounded-md">
        CHECKOUT NOW
      </button>
    </div>
  )
}

export default CheckOutCard