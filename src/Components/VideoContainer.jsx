import React, { useEffect, useState } from 'react'
import { Youtube_API } from '../Utils/Constant'
import VideoCard from './VideoCard';

const VideoContainer = () => {
  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async() =>{
    const data = await fetch(Youtube_API);
    const json = await data.json();
    // console.log(json.items);
    setVideos(json.items);
  }
  return (
    <div className='flex gap-3 flex-wrap pt-3'>
      {
        videos.map((item)=>(
          <VideoCard key={item.id} info={item} />
        ))
      }
    </div>
  )
}

export default VideoContainer