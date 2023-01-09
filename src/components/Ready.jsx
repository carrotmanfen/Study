import React from 'react'
import Button from './Button'

const Ready = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
        <div className='flex flex-col px-6 sm:px-0 mt-16 sm:mt-24 justify-center items-center sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px]'>
            <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center '>ARE YOU READY?</h2>
            <h1 className='text-white font-outfit font-semibold text-[36px] sm:text-[44px] md:text-[60px] sm:leading-[50px] md:leading-[60px] text-center  mb-6'>be a part of the <span className='text-dimBlue'><br className='block md:hidden'/>next big thing</span></h1>
            <Button text={'GET STARTED'} styles={'sm:px-6 sm:w-[300px]'}/>
        </div>        
    </section>
  )
}

export default Ready