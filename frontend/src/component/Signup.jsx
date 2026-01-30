import axios from "axios";
import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function Signup() {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const handleSignup = async ()=>{
        try{
            const res = await axios.post("http://localhost:3000/signup",{
                username,
                email,
                password
            });
          localStorage.setItem("token",res.data.token);
            toast.success('Signup Successfully!')
            window.location.href = "/dashboard";
        } catch (err) {
            toast.error("Signup Failed");
            console.error(err);
        }
    }
    return (
        <div className="w-screen flex justify-center items-center h-screen bg-black">
            <div className=" w-[70%]  rounded-3xl bg-[#252525] h-[70%]">
                
                    <div className="px-5 font-black text-zinc-400 text-3xl">
                        Todo<span className="inline-block bg-blue-500 rounded-full h-2 w-2 "></span>Board
                 
                    </div>
              
                <div className="text-zinc-400 bg-black h-[80%]  flex-col text-center flex justify-center items-center  font-semibold ">
                    <div className="bg-black border border-zinc-700 rounded-2xl p-7">
                    <p className="text-2xl text-zinc-400 font-semibold ">Create Todo's</p>
                    <p>Already have an account? <span className="cursor-pointer text-blue-500" onClick={()=>navigate("/login")}>Login</span></p>

                    <div className="text-start mt-10">
                        <p className="text-xl">Name</p>
                        <input value={username} onChange={(e) => setUsername(e.target.value)}  type="text" placeholder="John Smith" className="bg-transparent border px-2 text-xs h-7 w-64 mt-2 " />
                        <p className="text-xl mt-5">Email</p>
                        <input value={email} onChange={ (e) => setEmail(e.target.value)} type="text" placeholder="john23@gmail.com" className="bg-transparent border px-2 text-xs h-7 w-64 mt-2 " />
                        <p className="text-xl mt-5">Password</p>
                        <input value={password} onChange={ (e) => setPassword(e.target.value)} type="password" placeholder="**********" className="bg-transparent border px-2 text-xs h-7 w-64 mt-2 " />
                    </div>
                    <button onClick={handleSignup} className="bg-[#0083ff] font-used text-white text-base w-full mt-10 px-5 rounded-full py-1">
                        SignUp
                    </button>
                </div>
                    </div>
            </div>
        </div>
    )
}