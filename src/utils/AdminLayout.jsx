import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="border-b py-4">
        <div className="container">
          <ul
            className="flex gap-3 text-lg font-semibold 
            text-slate-800"
          >
            <li>Users</li>
            <Link to="/dashboard/productlist">
              <li>Product</li>
            </Link>
            <li>Orders</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default AdminLayout;
