import axios from 'axios'
import Image from '../components/login/Image'
import LoginForm from '../components/login/LoginForm'

function Login() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      {/* container that keeps content centered and constrained */}
      <div className="w-full max-w-6xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center md:items-start gap-12">
        <Image />

        <div className="w-full md:w-1/3">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login
