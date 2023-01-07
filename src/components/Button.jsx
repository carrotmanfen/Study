import React from 'react'

const Button = (props) => {
  return (
    <button type='button' className={`py-3 px-8 sm:px-6 md:px-12 bg-secondary font-outfit font-semibold text-[20px] text-white rounded-[40px] outline-none ${props.styles}`}>
        {props.text}
    </button>
  )
}

export default Button