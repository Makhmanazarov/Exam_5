import React from "react";

export const AboutUsMiniCard = ({ icon: Icon, name, text }) => {
  return (
    <div className="flex items-center gap-5 mb-[35px]" >
      <div className=" w-[100px] h-[100px] bg-white rounded-[20px] flex items-center justify-center ">
        <Icon />
      </div>
      <div className=" max-w-[410px] w-[100%]" >
        <h3 className=" font-Roboto font-extrabold text-[25px] text-primary mb-[7px]" >{name}</h3>
        <p  className=" font-Roboto font-normal text-[18px] text-cityRain">{text}</p>
      </div>
    </div>
  );
};
