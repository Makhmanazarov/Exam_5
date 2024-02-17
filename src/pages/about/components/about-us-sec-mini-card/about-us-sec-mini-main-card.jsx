import React from 'react'

export const AboutUsSecMiniMainCard = ({icon: Icon, title}) => {
  return (
    <div  className='flex items-center gap-[15px]'>
        <div>
            <Icon/>
        </div>
        <div className='max-w-[220px] w-[100%]' >
            <h3 className=' font-Roboto text-[25px] font-medium text-primary' >{title}</h3>
        </div>
    </div>
  )
}
