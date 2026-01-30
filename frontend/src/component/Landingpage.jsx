import { useNavigate } from "react-router-dom"

export function LandingPage(){
  const navigate = useNavigate();
    return(
        <div className="  flex mt-28 font-used  flex-col justify-center items-center">
    <div className='flex font-black flex-col text-center text-7xl  '>  
     Manage Tasks Smarter 
     <span className='mt-4 flex flex-col justify-center items-center relative whitespace-nowrap '> not Harder.
     <svg 
      viewBox="0 0 100 10" 
      fill="none" 
      preserveAspectRatio="none"
      className="relative w-96 bottom-1 text-center h-6"
    >
      <path 
        d="M2 6C50 1 0 2 100 0" 
        stroke="#0083ff" 
        strokeWidth="4" 
        strokeLinecap="butt"
      />
    </svg>
     </span>
     </div>
     <div className="text-2xl text-zinc-600  w-[55%] text-center mt-5 font-light">
     Create boards, organize todos, and stay focused with our simple task management app.
     </div>

     <button onClick={()=>navigate("/signup")} className="bg-[#0083ff] text-white text-2xl mt-10 px-14 rounded-full py-5">Get Started. It's FREE </button>
        <div className="mt-20">
     <img src="./todo.webp" alt="" />
        </div>
        </div>
    )
}