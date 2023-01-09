import React from 'react'
import { buildIn } from '../assets'
import Button from './Button'

const Analytic = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className='flex flex-col sm:flex-row justify-center items-center sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px] sm:mt-16 px-6 sm:px-0'>
            <img src={buildIn} alt="buildIn" className='w-[160px] xs:w-[240px] sm:w-[50%]' />
            <div className='flex flex-col '>
                <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center sm:text-left'>ANALYTICS</h2>
                <h1 className='text-white font-outfit font-semibold text-[36px] sm:text-[44px] md:text-[60px] sm:leading-[50px] md:leading-[60px] text-center sm:text-left mb-6'>built-in analytics to track your NFTs</h1>
                <p className='text-white font-normal font-roboto text-[20px] text-center sm:text-left mb-6 '>Use our built-in analytics dashboard to pull valuable insights <br className='hidden lg:block'/>and monitor the value of your Krypto portfolio over time</p>
                <Button text={'VIEW OUR PRICING'} styles={' sm:px-6 sm:w-[300px]'}/>
            </div>
        </div>
    </section>
  )
}

export default Analytic