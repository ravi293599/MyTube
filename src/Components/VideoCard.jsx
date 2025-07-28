import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { formatNumber } from '../Utils/CommonFunc';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { SlFlag } from "react-icons/sl";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { MdOutlineNotInterested } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import { RxDownload } from "react-icons/rx";
import { HiOutlineBookmark } from "react-icons/hi2";
import { GoClock } from "react-icons/go";
import { PiQueue } from "react-icons/pi";

const VideoCard = ({info}) => {
    const[extraDetails,setExtraDetails] = useState(false);
    if(info==null) return
    // console.log(info);
    const {snippet,statistics} = info;
    const{title,channelTitle,thumbnails} = snippet;
  return (
     <div className='w-[22rem] cursor-pointer'>
        <Link to={"/watch?v=" + info.id}>
            <img alt="thumnails" className='w-full h-[198px] rounded-xl' src={thumbnails.maxres?thumbnails.maxres.url:thumbnails.standard.url} />
        </Link>
            <div className='desc flex mt-2 gap-2 relative'>
                <div className='channel'></div>
                <div className="video-details w-full flex flex-col">
                    <span className='text-base font-semibold'>{title}</span>
                    <span className='text-sm text-stone-600'>{channelTitle}</span>
                    <span className='text-sm text-stone-600'>{formatNumber(statistics.viewCount)} views</span>
                </div>
                <div className='three-dot relative z-10 w-8 h-8 rounded-full hover:bg-[#eee] cursor-pointer flex flex-shrink-0 justify-center items-center' onClick={() => setExtraDetails(true)} >
                   <HiOutlineDotsVertical className='text-[20px]' />
                   
                </div>
                {
                    extraDetails &&
                    <div className='dot-function bg-white w-64 absolute top-1 -right-64 rounded-xl overflow-hidden z-10' style={{ boxShadow: "0 4px 32px 0 rgba(0, 0, 0, 0.1)"}}>
                        <div>
                            <span className='flex p-2 gap-2 hover:bg-gray-100 items-center text-base'><span><PiQueue className='text-xl' /></span>Add to queue</span>
                            <span className='flex p-2 gap-2 hover:bg-gray-100 items-center text-base'><span><GoClock className='text-xl' /></span>Save to Watch Later</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><HiOutlineBookmark className='text-xl' /></span>Save to Playlist</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><RxDownload className='text-xl'  /></span>Download</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><PiShareFatLight className='text-xl' /></span>Share</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><MdOutlineNotInterested className='text-xl' /></span>Not interested</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><MdOutlineDoNotDisturbOn className='text-xl' /></span>Don't recommend channel</span>
                            <span className='flex p-2 gap-2  hover:bg-gray-100 items-center text-base'><span><SlFlag className='text-xl' /></span>Report</span>
                        </div>
                   </div>
                   }
            </div>
        </div>
  )
}

export default VideoCard