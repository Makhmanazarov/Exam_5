import React from 'react'

export const OurMainWork = ({icon: Icon, title,text }) => {
  return (
    <div className=' w-[260px] pt-[50px] px-[25.5px] pb-[19px] text-center bg-white rounded-[30px] hover:shadow-usual transition-all duration-300' >
      <div className=' flex items-center justify-center w-[95px] h-[95px] bg-doctor rounded-[18px] ml-auto mr-auto mb-4' >
        <Icon/>
      </div>
      <h3 className=' font-Roboto font-extrabold text-[24px] text-primary mb-3' >{title}</h3>
      <p className=' w-[180px] ml-auto mr-auto font-Roboto font-normal text-[18px] text-cityRain' >{text}</p>
    </div>
  )
}
