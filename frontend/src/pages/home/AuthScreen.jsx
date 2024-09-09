import { useState } from "react"
import { Link,useNavigate} from "react-router-dom"
import { ChevronRight } from "lucide-react"
const AuthScreen = () => {
  const [email, setEmail] = useState("")
  const navigate=useNavigate()

  const handleFormSubmit= (e) =>{
    e.preventDefault()
    navigate('/signup?email=' + email)

  }

  // console.log(email)
  return (
    <div className="hero-bg relative">



      <header className="max-w-6xl mx-auto flex  items-center justify-between p-4 pb-10 ">

        <img src="/netflix-logo.png" alt="" className="w-32 md:w-52" />
        <Link to={"/login"} className=" text-white bg-red-700 py-1 px-2 rounded">
          Sign In
        </Link>

      </header>

      <div className=" flex flex-col justify-center items-center  text-center  text-white py-40 max-w-6xl mx-auto">

        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">Unlimited movies,TV shows,and more</h1>
        <p className="text-lg mb-4">Watch Anywhere. Cancel anytime</p>
        <p className="mb-4">Ready to watch? Enter yout email to create or restart your membership</p>
        <form 
        className=" flex flex-col md:flex-row gap-4 w-1/2"
        onSubmit={handleFormSubmit}>
          <input type="email"
            placeholder="john@gmail.com"
            className="p-2 rounded flex-1 bg-black/80 border border-gray-700 "
            value={email}
            onChange={(e) => setEmail(e.target.value)}

          />
          <button className="bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 md:py-2  flex rounded justify-center items-center " >
            Get Started
            < ChevronRight className="size-8 md:size-10" />
          </button>
        </form>


      </div>


      <div className="h-2 w-full bg-[#232323] " aria-hidden="true" />

      <div className="py-10 bg-black text-white">

        <div className="flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2 ">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold md-4 ">Enjoy ur Tv</h2>
            <p>Watch on SMart Tvs, Playstation,Xbox,Chromecast, Apple Tv and more</p>
          </div>
          <div className="flex-1 relative">
            <img src="/tv.png" alt="Tv image" className="mt-4 z-10 relative" />
            <video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2"
              playsInline
              autoPlay={true}
              loop
              muted


            >
              <source src="hero-vid.m4v" />
            </video>
          </div>



        </div>
      </div>

      <div className="h-2 w-full bg-[#232323] " aria-hidden="true" />

      <div className="py-10 bg-black text-white">
        <div className="flex items-center justify-center max-w-6xl mx-auto  md:flex-row flex-col-reverse px-4 md:px-2">


          <div className="flex-1 relative">
            <div className="">
              <img src="/stranger-things-lg.png" alt="" className="mt-4" />

              <div
                className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2
              '
              >
                <img src='/stranger-things-sm.png' alt='image' className='h-full' />
                <div className=' flex justify-between items-center w-full'>
                  <div className='flex flex-col gap-0'>
                    <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                    <span className='text-sm text-blue-500'>Downloading...</span>
                  </div>

                  <img src='/download-icon.gif' alt='' className='h-12' />
                </div>
              </div>

            </div>
          </div>


          <div className="right md:text-left text-center flex-1 text-balance ">
            <h1 className="text-4xl font-extrabold mb-4  md:text-5xl ">Download your shows to watch offline</h1>
            <p className="text-lg md:text-xl">Save your favourite easily and always have something to watch</p>
          </div>
        </div>
      </div>

      <div className="h-2 w-full bg-[#232323] " aria-hidden="true" />

      
      <div className="py-10 bg-black text-white">

        <div className="flex  max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2 ">
          <div className=" flex-1 text-center md:text-left">
            <h1 className="font-extrabold text-4xl mb-4 md:text-5xl" >Wacth Everywhere</h1>
            <p className="md:text-xl text-lg ">Streamunimited movies and TV shows in your phone,tablet .laptop and TV </p>
          </div>
          <div className=" relative flex-1 ">
          
          <img src="/device-pile.png" alt="devices" className="relative z-10 mt-4" />
          <video 
          className=" absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4/6 max-w-[63%] "
          src="/video-devices.m4v"
          autoPlay={true}
          loop
          muted
          >

          </video>
          </div>

        </div>
      </div>

      <div className="h-2 w-full bg-[#232323] " aria-hidden="true" />


      <div className="py-10 bg-black text-white">

        <div className="flex  max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2 ">
          <div className="flex-1">
            <img src="/kids.png" alt="" />



          </div>


          <div className="flex-1 text-center md:text-left ">
            <h1 className="text-4xl font-extrabold mb-4 md:text-5xl">Create profile for kids</h1>
            <p className="md:text-xl text-lg" >Send kids on adventures with their fvrt caharacters in a space made jut for them- free with your memebership</p>
          </div>
        </div>


      </div>

    </div>

  )
}

export default AuthScreen