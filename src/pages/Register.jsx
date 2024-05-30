import React from "react";


const Register = () => {
  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="border rounded-xl shadow-sm p-4 max-w-xl w-full mx-auto">
         <h1 className="text-2xl font-semibold text-slate-900 mb-6">
          Create New Account
          </h1>
          <form className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" id="firstname" />
            </div>
            <div className="space-y-1">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" id="lastname" />
            </div>
            <div className="space-y-1">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" />
            </div>
            <div className="space-y-1">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="space-y-1">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div>
              <button className="w-full bg-teal-500 hover:bg-teal-600">
                Regsiter
                </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Register;
