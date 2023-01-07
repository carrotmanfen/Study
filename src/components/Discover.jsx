import React from 'react'
import {discover} from "../assets" 
import Button from './Button'
import ButtonClear from './ButtonClear'

const Discover = () => {
  return (
    <section className='flex justify-center items-center'>
        <div className="flex flex-col w-full sm:flex-row-reverse flex-1 justify-center lg:justify-between items-center z-10 mt-16 sm:mt-0 p-6 sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px]">
            <img src={discover} alt="discover" className='w-[160px] xs:w-[240px] sm:w-[50%]'/>
            <div>

                <h1 className='py-10 text-white font-outfit font-semibold text-[60px] leading-[60px] text-center sm:text-left'>
                    discover <br className='hidden xs:block md:hidden'/>and <br className='block xs:hidden ms:block lg:block '/>collect <br className='hidden xs:block md:hidden'/> <span className='text-dimBlue'>rare</span><br className='hidden md:block lg:hidden'/> NFTs
                </h1>
                <p className='text-white font-roboto text-center sm:text-left text-[20px] font-normal'>The most secure marketplace for <br className='hidden xs:block md:hidden'/> buying <br className='hidden md:block'/> and selling unique crypto assets</p>
                <div className='flex flex-row justify-between mt-10'>
                    <Button text={'BUY NFTS'} />
                    <ButtonClear text={'SELL NFTS'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discover