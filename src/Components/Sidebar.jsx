import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='p-3 w-[18rem] bg-white'>
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <div className='pt-5'>
        <h3 className='font-semibold'>You</h3>
        <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Like Videos</li>
        <li>Downloads</li>
      </ul>
      </div>
            <div className='pt-5'>
        <h3 className='font-semibold'>Subscriptions</h3>
        <ul>
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Like Videos</li>
        <li>Downloads</li>
      </ul>
      </div>
            <div className='pt-5'>
        <h3 className='font-semibold'>Explore</h3>
        <ul>
        <li>Trendin</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
        <li>Courses</li>
        <li>Fashion and Beauty</li>
        <li>Podcasts</li>
      </ul>
      </div>
                <div className='pt-5'>
        <h3 className='font-semibold'>More from Youtube</h3>
        <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      </div>
      <div>
      <h3 className='font-semibold'>More from Youtube</h3>
        <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
      </div>
      <div>
        <ul>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedbacks</li>
      </ul>
      </div>
    </div>
  )
}

export default Sidebar