import React from 'react'

const Button = ({buttons}) => {
  return (
    <>
       {
        buttons.map((b,index) =>(
            <button key={index} className='px-3 w-max py-2 bg-[#eee] leading-none rounded-lg hover:bg-[#222] hover:text-white'>{b}</button>
        ))
       }
    </>
  )
}

export default Button