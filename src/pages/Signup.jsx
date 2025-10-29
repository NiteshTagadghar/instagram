import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  function signup(e) {
    e.preventDefault()

    if (!email || !name || !password) {
      alert("details not filled")
      return
    }

    signUpCall()
  }

  async function signUpCall() {
    try {
        console.log(name,email,password)
      const apiResponse = await axios.post('http://localhost:5000/api/auth/signup',
        { name: name, email: email, password: password }
      )

      if (apiResponse.status) {
        navigate("/login")
      }

      console.log(apiResponse, 'sign up api response')
    } catch (err) {
        alert(err.response.data.message)
      console.log(err, 'error while signing up')
    }
  }

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md px-6 py-10">
        
        {/* Instagram Logo */}
        <h1 className="text-4xl mb-6 font-[500]" style={{ fontFamily: 'cursive' }}>
          Instagram
        </h1>

        {/* Card */}
        <div className="w-full bg-[#0b0b0b] border border-gray-700 rounded-lg shadow-md">
          <div className="p-8 space-y-6">

            <p className="text-center text-gray-300 text-sm">
              Sign up to see photos and videos from your friends.
            </p>

            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded text-sm font-medium"
            >
              Log in with Facebook
            </button>

            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-1/3 bg-gray-700"></div>
              <span className="text-xs text-gray-400">OR</span>
              <div className="h-px w-1/3 bg-gray-700"></div>
            </div>

            {/* Form */}
            <form className="space-y-4" action="#" onSubmit={signup}>

              {/* name */}
              <div>
                <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-300">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="bg-[#0b0b0b] border border-gray-700 text-gray-100 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-300">Your email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="name@company.com"
                  className="bg-[#0b0b0b] border border-gray-700 text-gray-100 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-300">Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-[#0b0b0b] border border-gray-700 text-gray-100 text-sm rounded-md block w-full p-2.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-600 rounded bg-transparent focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-400">
                    I accept the <a className="font-medium text-blue-400 hover:underline" href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-md text-sm px-5 py-2.5 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign up
              </button>

              <p className="text-xs text-gray-400 text-center leading-relaxed">
                People who use our service may have uploaded your contact information to Instagram. <span className="text-blue-400">Learn More</span>
                <br />
                By signing up, you agree to our <span className="text-blue-400">Terms</span>, <span className="text-blue-400">Privacy Policy</span> and <span className="text-blue-400">Cookies Policy</span>.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom "Have an account" section */}
        <div className="mt-4 w-full border border-gray-700 rounded-md py-4 text-center">
          <p className="text-gray-300 text-sm">
            Have an account? <Link to="/login" className="text-blue-400 font-semibold hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Signup
