import React from 'react'

export const OfferMainItem = ({img, title}) => {
  return (
    <div className='max-w-[335px] w-[100%] group' >
        <div className='py-[30px] px-[40px] bg-white flex items-center justify-center rounded-[30px] mb-[15px]' >
            <img className='transition-all duration-500 group-hover:scale-[.8]' src={img} alt="image" />
        </div>
        <h3 className=' font-Roboto font-medium text-[25px] text-white text-center' >{title}</h3>
    </div>
  )
}
