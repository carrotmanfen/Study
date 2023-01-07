import React from 'react'
import {features} from '../constants'


const feature = () => {
  return (
    <section className='flex flex-col justify-center items-center sm:mt-16'>
        <h1 className='font-roboto font-normal text-white text-[30px] z-10'>
            Featured on
        </h1>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-10 sm:flex sm:flex-row justify-center items-center  p-4 z-10'>
            {features.map((feature,index)=>(
                
                <img key={feature.id} src={feature.logo} alt={feature.id} className={`${index%2===0 ? 'justify-self-end' :''}`}/>
                ))}
        </div>
    </section>
  )
}

export default feature