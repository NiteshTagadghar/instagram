import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"

function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function login(e) {
    e.preventDefault()
    if (!email || !password) {
      alert("fill all details")
      return
    }
    loginCall()
  }

  async function loginCall() {
    try {
      const apiResponse = await axios.post(`http://localhost:5000/api/auth/login`, { email, password })
      if (apiResponse.data.success) {
        localStorage.setItem("token", apiResponse.data.data.token)
        navigate("/")
      }
    } catch (err) {
      console.log("error in logging in", err)
      alert("Login failed")
    }
  }

  return (
    <div className="flex flex-col items-center">
      {/* Card */}
      <div className="bg-[#0b0b0b] border border-gray-700/60 p-8 rounded-lg w-full shadow-lg">
        <h1 className="text-4xl font-[600] mb-6 text-center" style={{ fontFamily: 'cursive' }}>
          Instagram
        </h1>

        <form className="flex flex-col gap-4" onSubmit={login}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="bg-[#0b0b0b] text-white placeholder-gray-400 border border-gray-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Phone number, username, or email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="bg-[#0b0b0b] text-white placeholder-gray-400 border border-gray-700 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            placeholder="Password"
          />

          <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 transition-colors py-3 rounded text-white font-medium">
            Log in
          </button>

          <div className="flex items-center justify-center gap-4 mt-3">
            <div className="h-px w-1/3 bg-gray-600" />
            <span className="text-sm text-gray-400">OR</span>
            <div className="h-px w-1/3 bg-gray-600" />
          </div>

          <button
            type="button"
            className="mt-4 w-full flex items-center justify-center gap-2 text-sm text-blue-300 font-semibold"
          >
            {/* Facebook icon could be added later */}
            Log in with Facebook
          </button>

          <div className="mt-4 text-center">
            <Link to="/forgot" className="text-sm text-gray-400 hover:underline">Forgot password?</Link>
          </div>
        </form>
      </div>

      {/* bottom signup card */}
      <div className="mt-4 bg-transparent text-center">
        <p className="text-gray-300">
          Don't have an account?{' '}
          <Link to='/signup' className="text-blue-400 font-semibold">Sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
