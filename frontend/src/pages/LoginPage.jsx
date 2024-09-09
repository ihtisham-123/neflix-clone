import { Link } from "react-router-dom"
import { useState } from 'react'

const LoginPage = () => {

  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: make API call to login user
    console.log("Email:", email, "Password:", password)
  }

  return (
    <div className='h-screen  w-full hero-bg' >
      <header className="max-w-6xl mx-auto flex  items-center justify-between p-4 pb-10 ">

      <Link to={"/"}>
          <img src="/netflix-logo.png" alt="" className='w-52' />
        </Link>

      </header>
      <div className=' mt-20 mx-3 flex justify-center items-center '>

        <div className=' bg-black/60 max-w-md p-8 space-y-6 rounded-lg shadow-md'>
          <h1 className='text-white text-center text-2xl font-bold'>Log In</h1>
          <form action="" className='space-y-6' onSubmit={handleSubmit}>
            <div className=''>
              <label htmlFor='email' className='tex-sm font-medium text-gray-500 block'>Email</label>
              <input type='email' className='w-full px-3 py-2 m-1 border border-gray-700 rounded-md bg-transparent text-white'
                id='email'
                name='email' placeholder='your@gmail.com'
                value={email}
                onChange={(e) => {
                  setemail(e.target.value)

                }}
              />
            </div>



            <div className=''>
              <label htmlFor='password' className='tex-sm font-medium text-gray-500 block'>Password</label>
              <input type='password' className='w-full px-3 py-2 m-1 border border-gray-700 rounded-md bg-transparent text-white'
                id='password' name='password' placeholder='********'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}

              />
            </div>

            <button className='w-full py-2 bg-red-600 text-white rounded-md font-semibold hover:bg-red-700 '>
              Log In
            </button>


          </form>


          <p className='text-center text-gray-500'>
            Dont Have an Account <Link to={"/signUp"} className='text-red-600 hover:underline'>SignUp</Link>
          </p>
        </div>


      </div>
    </div>



  )
}


export default LoginPage