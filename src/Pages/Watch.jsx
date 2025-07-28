import React from 'react'
import Body from '../Components/Body'
import WatchPage from '../Components/WatchPage'
import Sidebar from '../Components/Sidebar'

const Watch = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <WatchPage />
    </div>
  )
}

export default Watch