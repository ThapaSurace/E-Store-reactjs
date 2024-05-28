import React from "react";

const Orderlist = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto mt-10">
      <h1 className="text-center text-2xl font-semibold mb-4 text-slate-900">Order Lists</h1>
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Payment ID</th>
                <th>User ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-gray-100">
                <td>123</td>
                <td>2134234234</td>
                <td>234324</td>
                <td>$100</td>
                <td>pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orderlist;