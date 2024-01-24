import React from 'react'

interface Props {
    value: string,
    isWhite: boolean;
}

const Button = (props:Props) => {
   const buttonColor = props.isWhite ? 'white border-[1px] border-solid border-gray-600 text-gray-700 bg-white mx-2' : 'blue bg-blue-700 text-white'
  
  return (
    <button className={`${buttonColor}  font-semibold text-base py-[14px] px-6 rounded-[100px]`}>
{props.value}
    </button>
  )
}

export default Button