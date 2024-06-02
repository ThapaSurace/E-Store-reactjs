import axios from "axios";
import React, { useState } from "react";


const Register = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
      firstname,lastname,username,email,password
    }
   try {
    const res = await axios.post('http://localhost:4000/api/auth/register',formData)
    console.log(res.data)
   } catch (error) {
    console.log(error)
   }
  }


  return (
    <div className="h-[90vh] flex justify-center items-center">
      <div className="border rounded-xl shadow-sm p-4 max-w-xl w-full mx-auto">
        <h1 className="text-2xl font-semibold text-slate-900 mb-6">
          Create New Account
        </h1>
        <form onSubmit={handleSubmit}  className="space-y-2">
          <div className="space-y-1">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" id="firstname" value={firstname} onChange={e => setFirstname(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" id="lastname" value={lastname} onChange={e => setLastname(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
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
