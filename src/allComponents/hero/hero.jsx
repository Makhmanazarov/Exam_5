import React from 'react'

export const Hero = ({title,img}) => {
  return (
    <section className='py-[184px] bg-cover bg-center' style={{ backgroundImage: `url(${img})` }}>
        <div className="container">
            <h1 className=' font-Roboto  font-extrabold text-[70px] text-primary text-center' >{title}</h1>
        </div>
    </section>
  )
}
