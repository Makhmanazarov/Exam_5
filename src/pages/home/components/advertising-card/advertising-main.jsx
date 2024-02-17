import React from 'react'

export const AdvertisingMain = ({img, button}) => {
  return (
    <div className=' relative'>
        <div>
            <img src={img} alt="image" />
            <button className=' top-[200px] left-[100px] absolute py-[25px] px-[75px] bg-white  font-Roboto text-[25px] font-medium text-primary rounded-[20px]' type='button' >{button}</button>
        </div>
    </div>
  )
}
