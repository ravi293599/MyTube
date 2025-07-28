import React, { useEffect, useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { HiMicrophone } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../Utils/Appslice';
import { YOUTUBE_SUGGESTION_API } from '../Utils/Constant';

const Header = () => {
  const [searchQuery,setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const handleInput = (val) =>{
    setSearchQuery(val);
  }
  const handleClose = () =>{
    setSearchQuery("");
  }
  const handleMenu = () =>{
    dispatch(toggleMenu());
  }
  useEffect(()=>{
    console.log(searchQuery);
    const timer = setTimeout(() =>
      getSearchSuggestions()
    , 200);
    return ()=>{
      clearTimeout(timer);
    };
  },[searchQuery]);
  const getSearchSuggestions = async()=>{
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    console.log(json);
  }
  return (
    <div className='flex justify-between items-center p-3 bg-white'>
      <div className='logo-section flex'>
        <span onClick={handleMenu} className='hamburger flex items-center justify-center text-[25px] mr-2 cursor-pointer h-10 w-10 rounded-3xl hover:bg-[#eee]'><RxHamburgerMenu /></span>
      <a href="/" className='flex '> <span className='flex items-center'> <img alt='logo' className='w-[100px] cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png" /></span></a>
      </div>
      <div className='search-section flex gap-3 items-center'>
        <div className='flex relative'>
          {searchQuery && <span className='cursor-pointer absolute top-2 right-20 text-3xl' onClick={handleClose}><RxCross2 /></span>}
          <input type="text" value={searchQuery} onChange={(e) => handleInput(e.target.value)}  className='border border-[#999] h-11 min-w-[500px] p-2 pb-[12px] pl-7 rounded-l-full outline-0'  placeholder='Seach' />
          <div className='bg-white fixed max-h-[400px] w-[500px] bottom-28 h-auto overflow-y-auto  p-2 rounded-lg border-[1px] border-[#d3d3d3]'>
            <ul>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
              <li className='cursor-pointer hover:bg-[#eee] p-2 rounded-lg'><a href='#' className='flex items-center text-base font-medium'><CiSearch className='text-xl mr-3' />iphone</a></li>
            </ul>
          </div>
          <button className='flex items-center justify-center h-11 bg-[#eee] border border-[#999] rounded-r-full text-2xl px-5 p-3 border-l-0'><CiSearch /></button>
        </div>
        <div className='search-speak flex items-center justify-center bg-[#eee] w-10 h-10 rounded-3xl cursor-pointer'><HiMicrophone /></div>
      </div>
      <div className='login-section flex gap-3'>
        <button className='flex items-center p-1 w-auto h-10 px-4 rounded-3xl font-semibold bg-[#eee]'><FiPlus />&nbsp;&nbsp;Create</button>
        <button className='flex items-center justify-center text-[25px] hover:bg-[#eee] w-11 h-11 rounded-3xl p-3 relative'>
          <span className='bg-red-600 absolute top-1 w-2 h-2 rounded-3xl flex items-center justify-center right-2 p-2 text-xs text-white'>1</span>
          <GoBell /></button>
        <span className='flex items-center justify-center cursor-pointer text-white w-10 h-10 bg-[#1060c7] rounded-3xl p-3'>R</span>
      </div>
    </div>
  )
}

export default Header