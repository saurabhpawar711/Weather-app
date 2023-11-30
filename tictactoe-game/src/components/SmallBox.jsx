import React from 'react'

function SmallBox(props) {
  return (
    <div onClick={props.onClick} className=' cursor-pointer border-solid border-4 border-blue-600 h-24 w-full flex align-middle justify-center '>
       <h1 className=' text-4xl text-pink-600 mt-4'>{props.value}</h1>
    </div>
  )
}

export default SmallBox;