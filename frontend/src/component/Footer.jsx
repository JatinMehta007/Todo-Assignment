import { RiGithubFill, RiLinkedinFill } from "@remixicon/react";

export function Footer(){
    return(
        <div className="bg-zinc-100 font-bold font-used px-20 flex justify-between items-center h-20">
             <div className=" font-black text-3xl">
                Todo<span className="inline-block bg-blue-500 rounded-full h-2 w-2 "></span>Board
            </div>
        <p className="font-semibold">Made by Jatin</p>
        <div className="flex gap-5">
        <RiLinkedinFill />
        <RiGithubFill />
        </div>
        </div>
    )
}