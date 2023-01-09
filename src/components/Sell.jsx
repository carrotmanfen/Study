import React from 'react'
import { sell } from '../assets'
import Button from './Button'

const Sell = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className='flex flex-col sm:flex-row justify-center items-center sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px] mt-16 sm:mt-24'>
            <img src={sell} alt="buildIn" className='w-[160px] xs:w-[240px] sm:w-[50%]' />
            <div className='flex flex-col px-6 sm:px-0'>
                <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center sm:text-left'>24/7 ACCESS</h2>
                <h1 className='text-white font-outfit font-semibold text-[36px] sm:text-[44px] md:text-[60px] sm:leading-[50px] md:leading-[60px] text-center sm:text-left mb-6'>sell your NFTs from anywhere at any time</h1>
                <p className='text-white font-normal font-roboto text-[20px] text-center sm:text-left mb-6 '>With our easy-to-use platform, you can buy or sell assets<br className='hidden lg:block'/> from anywhere in the world, at any time</p>
                <Button text={'GET STARTED'} styles={'sm:px-6 sm:w-[300px]'}/>
            </div>
        </div>
    </section>
  )
}

export default Sell