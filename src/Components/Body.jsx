import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleMenu } from '../Utils/Appslice'

const Body = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(handleMenu(true))
  })
  return (
    <div className='flex'>
        <Sidebar />
        <MainContainer />
    </div>
  )
}

export default Body