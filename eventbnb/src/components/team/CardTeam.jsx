"use client"
import Image from "next/image";
import Link from "next/link";
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const CardTeam = ({name, rol, image, socialMedia, href}) => {
    return(
        <div className={`w-80 flex flex-col items-center gap-y-6 border-t-4 border-t-pink-600 rounded-b-lg px-6 bg-black/5 py-10`}>
            <div className="shadow-xl card-team flex items-center justify-center border-2">
                <Image src={image.src} width= {image.width} height={image.height} alt={image.alt} className="object-fit"></Image>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="font-semibold text-xl">{name}</h3>
                <span className="font-light font-slate-700">{rol}</span>
            </div>
            <div className="flex items-center justify-center gap-x-4">
                <Link href={socialMedia.github} className="card-team h-10 w-10 bg-black flex items-center justify-center hover:cursor-pointer hover:bg-black/90">
                    <AiFillGithub className="text-white text-xl"></AiFillGithub>
                </Link>
                <Link href={socialMedia.linkedin} className="card-team h-10 w-10 bg-blue-600 flex items-center justify-center hover:cursor-pointer hover:bg-blue-500">
                    <FaLinkedinIn className="text-white text-xl"></FaLinkedinIn>
                </Link>
                <Link href={socialMedia.website} className="card-team h-10 w-10 bg-violet-900 flex items-center justify-center hover:cursor-pointer hover:bg-violet-800">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 17 17" className="w-5 h-5 text-white text-xl mx-auto" height=".8em" width=".8em" xmlns="http://www.w3.org/2000/svg"><g></g><path d="M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.814-8.5-8.5-8.5zM1.041 9h2.937c0.044 1.024 0.211 2.031 0.513 3h-2.603c-0.481-0.906-0.776-1.923-0.847-3zM3.978 8h-2.937c0.071-1.077 0.366-2.094 0.847-3h2.6c-0.301 0.969-0.467 1.976-0.51 3zM5.547 5h5.896c0.33 0.965 0.522 1.972 0.569 3h-7.034c0.046-1.028 0.239-2.035 0.569-3zM4.978 9h7.035c-0.049 1.028-0.241 2.035-0.572 3h-5.891c-0.331-0.965-0.524-1.972-0.572-3zM13.013 9h2.978c-0.071 1.077-0.366 2.094-0.847 3h-2.644c0.302-0.969 0.469-1.976 0.513-3zM13.013 8c-0.043-1.024-0.209-2.031-0.51-3h2.641c0.48 0.906 0.775 1.923 0.847 3h-2.978zM14.502 4h-2.354c-0.392-0.955-0.916-1.858-1.55-2.7 1.578 0.457 2.938 1.42 3.904 2.7zM9.074 1.028c0.824 0.897 1.484 1.9 1.972 2.972h-5.102c0.487-1.071 1.146-2.073 1.97-2.97 0.199-0.015 0.398-0.030 0.602-0.030 0.188 0 0.373 0.015 0.558 0.028zM6.383 1.313c-0.629 0.838-1.151 1.737-1.54 2.687h-2.314c0.955-1.267 2.297-2.224 3.854-2.687zM2.529 13h2.317c0.391 0.951 0.915 1.851 1.547 2.689-1.561-0.461-2.907-1.419-3.864-2.689zM7.926 15.97c-0.826-0.897-1.488-1.899-1.978-2.97h5.094c-0.49 1.072-1.152 2.075-1.979 2.972-0.181 0.013-0.363 0.028-0.547 0.028-0.2 0-0.395-0.015-0.59-0.030zM10.587 15.703c0.636-0.842 1.164-1.747 1.557-2.703h2.358c-0.968 1.283-2.332 2.247-3.915 2.703z"></path></svg>
                </Link>
            </div>
            {/* <Link href={`./about/${href}`} className={`self-end flex items-center gap-x-2 font-semibold group text-black underline`}><span className="group-hover:scale-[1.05]">Saber mas</span><AiOutlineArrowRight className="group-hover:translate-x-2"></AiOutlineArrowRight></Link> */}
        </div>
    )
} 
export default CardTeam;
