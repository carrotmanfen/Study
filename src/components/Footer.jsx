import React from 'react'
import {footers} from '../constants'
import { airplane } from '../assets'

const Footer = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center lg:items-start mt-16 sm:mt-24 '>
        <div className='flex flex-col w-full justify-center items-center md:items-start'>
            <h2 className='text-white font-semibold font-roboto text-[20px] mb-6 text-center md:hidden'>KRYPTO</h2>
            <div className='grid grid-cols-3 lg:grid-cols-4 w-full'>
                <h2 className='text-white font-semibold font-roboto text-[20px] mb-6 text-center ml-4 lg:ml-0 lg:mb-0 hidden md:block  '>KRYPTO</h2>
                <div className='hidden md:block lg:hidden col-span-2'></div>
                {footers.map((footer)=>(
                    <div key={footer.title} className='flex flex-col justify-self-center  '>
                        <h4 className='text-white font-roboto text-center md:text-left font-semibold text-[16px] mb-4'>{footer.title}</h4>
                        <ul>
                            {footer.links.map((links)=>(
                                <li key={links.name} className='text-white font-roboto text-center md:text-left font-normal text-[16px]'>
                                    <a href={links.link}>{links.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
        <div className='flex flex-col w-full px-16 justify-center items-center md:items-start   '>
            <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center md:text-left mt-16 md:mt-4 lg:mt-0'>join our newsletter</h2>
            <form className='flex flex-row gap-4 w-full justify-center'>
                <input type="text" id='email' name='email' placeholder='email address' className='bg-[#8F8FDB] text-primary placeholder:text-primary font-roboto text-[16px] max-w-[400px] md:max-w-none py-3 px-6 rounded-full w-full'/>
                <img src={airplane} alt="send-email" className='bg-secondary px-5 rounded-full block sm:hidden' />
                <input type="submit" value="submit" className='bg-secondary px-6 rounded-full text-white font-roboto text-[16px] font-normal hidden sm:block' />
            </form>
        </div>
    </section>
  )
}

export default Footer