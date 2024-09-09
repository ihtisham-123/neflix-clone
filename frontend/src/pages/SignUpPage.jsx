
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/authUser'

const SignUpPage = () => {
  const {searchParams} = new URL(document.location)
  const emailValue=searchParams.get("email")
  const [email, setEmail] = useState(emailValue || "")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const { signup }= useAuthStore()

  const handleSignUp = async (e) => {
    e.preventDefault()
    signup({email,username,password})

  }

  return (
    <div className='h-screen  w-full hero-bg' >

      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
          <img src="/netflix-logo.png" alt="" className='w-52' />
        </Link>

      </header>
      <div className=' mt-20 mx-3 flex justify-center items-center '>

        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-white text-center text-2xl font-bold mb-4'>Sign Up</h1>
          <form action="" className='space-y-4u ' onSubmit={handleSignUp}>
            <div className=''>
              <label htmlFor='email' className='tex-sm font-medium text-gray-500 block'>Email</label>
              <input type='email' className='w-full px-3 py-2 m-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                id='email'
                name='email' placeholder='your@gmail.com'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)

                }}
              />
            </div>

            <div className=''>
              <label htmlFor='UserName' className='tex-sm font-medium text-gray-500 block'>USerName</label>
              <input type='text'
               className='w-full px-3 py-2 m-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                id='username' name='username' placeholder='johnpaul' 
                value={username}
                onChange={(e)=>{
                  setUsername(e.target.value)
                }}
                />
            </div>

            <div className=''>
              <label htmlFor='password' className='tex-sm font-medium text-gray-500 block'>Password</label>
              <input type='password' className='w-full px-3 py-2 m-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                id='password' name='password' placeholder='********' 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}

                />
            </div>

            <button className='w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 '>
              Sign UP
            </button>


          </form>


          <p className='text-center text-gray-500'>
            Already have an account? <Link to={"/login"} className='text-red-600 hover:underline'>Log In</Link>
          </p>
        </div>


      </div>
    </div>



  )
}

export default SignUpPage