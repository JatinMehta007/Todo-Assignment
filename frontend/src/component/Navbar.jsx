export function Navbar(){
   return (
        <div className="flex font-used items-center justify-between px-20 w-screen h-28 ">
            <div className=" font-black text-3xl">
                Todo<span className="inline-block bg-blue-500 rounded-full h-2 w-2 "></span>Board
            </div>
            <ul className="flex gap-10 text-xl text-zinc-500">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Boards</li>
                <li className="cursor-pointer">Portfolio</li>
            </ul>
            <button className="text-xl border border-blue-500 rounded-full px-10 text-blue-500  py-1">
                Login
            </button>
        </div>
)
}