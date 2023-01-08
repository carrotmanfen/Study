import React,{useState} from 'react'
import {testimonials} from '../constants'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = ()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length-1 : currentIndex-1;
    setCurrentIndex(newIndex);
  }

  const nextSlide =()=>{
    const isLastSlide = currentIndex === testimonials.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex+1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex)=>{
    setCurrentIndex(slideIndex)
  }

  return (
    <section className='flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center mt-16 sm:mt-24 sm:max-w-[696px] md:max-w-[960px] lg:max-w-[1140px]'>
            <div className='flex flex-col'>
                <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center '>TESTIMONIALS</h2>
                <h1 className='text-white font-outfit font-semibold text-[28px] sm:text-[60px]  sm:leading-[60px] text-center  mb-6'>read what others have to say</h1>
            </div>
            {/* slider for mobile */}

            <div className='flex flex-col justify-center items-center relative mt-24 w-full md:hidden'>
                <img src={testimonials[currentIndex].logo} alt={testimonials[currentIndex].id} className='absolute -top-[25%] w-[150px]' />
                <div className='flex flex-col items-center justify-center bg-third mx-6'>
                    <p className='w-[66%] text-white font-normal font-roboto text-[20px] text-center mb-6 pt-[110px]'>{testimonials[currentIndex].title}</p>
                    <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center uppercase'>{testimonials[currentIndex].name}</h2>
                </div>
                <div className='flex flex-row mt-6 gap-4 '>
                    {testimonials.map((slide,slideIndex)=>(
                        <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className={`w-[35px] h-[35px] rounded-full cursor-pointer ${currentIndex===slideIndex ? 'bg-[#8F8FDB]':'bg-secondary'}`}>
                    
                        </div>
                    ))}
                </div>
            </div>
            <div className='hidden md:grid grid-cols-3 justify-center items-center relative mt-32 w-full'>       
                {testimonials.map((block)=>(
                    <div key={block.id} className='flex justify-center items-center'>
                        <img src={block.logo} alt={block.id} className='absolute -top-[25%] w-[150px]' />
                        <div className='flex flex-col items-center justify-center bg-third mx-6'>
                            <p className='w-[66%] text-white font-normal font-roboto text-[20px] text-center mb-6 pt-[110px]'>{block.title}</p>
                            <h2 className='text-white font-normal font-roboto text-[20px] mb-6 text-center uppercase'>{block.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials