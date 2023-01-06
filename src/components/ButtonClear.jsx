import React from 'react'

const ButtonClear = (props) => {
  return (
    <button type='button' className='py-3 px-8 sm:px-6 md:px-12 border-2 border-dimBlue font-outfit font-semibold text-[20px] text-white rounded-[40px] outline-none'>
        {props.text}
    </button>
  )
}

export default ButtonClear