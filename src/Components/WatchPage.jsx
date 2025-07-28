import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { handleMenu } from '../Utils/Appslice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(handleMenu(false));
    })
  return (
    <div className='px-10 py-6 w-full'>
      <iframe width="853" height="480" className='rounded-2xl' 
        src={"https://www.youtube.com/embed/"+ searchParams.get("v")} 
        title="Monica - Lyric Video| COOLIE | Superstar Rajinikanth | Sun Pictures | Lokesh | Anirudh | Pooja Hegde" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
      </iframe>
    </div>
  )
}

export default WatchPage
