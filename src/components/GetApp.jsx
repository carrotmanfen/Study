import React from 'react'
import { getApp } from '../assets' 
import Button from './Button'

const GetApp = () => {
  return (
    <section className='flex justify-center items-center mt-16'>
        <div className='flex flex-col sm:flex-row-reverse justify-center items-center sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px] sm:mt-16'>
            <img src={getApp} alt="getApp" className='w-[160px] xs:w-[240px] sm:w-[50%]'/>
            <div className='flex flex-col '>
            <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center sm:text-left'>GET OUR APP</h2>
                <h1 className='text-white font-outfit font-semibold text-[28px] sm:text-[44px] md:text-[60px] sm:leading-[50px] md:leading-[60px] text-center sm:text-left mb-6'>browse NFTs from your smartphone</h1>
                <p className='text-white font-normal font-roboto text-[20px] text-center sm:text-left mb-6 '>Our Krypto app is the easiest way to keep track of<br className='hidden lg:block'/> your assets when you’re on the go</p>
                <Button text={'DOWNLOAD ON IOS'} styles={'mx-6 sm:mx-0 sm:px-6 sm:w-[300px]'}/>
            </div>
        </div>
    </section>
  )
}

export default GetApp