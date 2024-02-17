import React from "react";

export const TestimonialMain = ({ name, text }) => {
  return (
    <div className="w-[210px] h-[210px] p-2 border-solid border-[4px]  border-padua rounded-[50%] ">
      <div className=" bg-beluga w-[186px] h-[188px] rounded-[50%] flex items-center justify-center">
        <div>
          <h3 className=" font-Roboto text-[50px] font-extrabold text-primary text-center " >{name}</h3>
          <p className=" font-Roboto text-[18px] font-semibold text-primary text-center" >{text}</p>
        </div>
      </div>
    </div>
  );
};
