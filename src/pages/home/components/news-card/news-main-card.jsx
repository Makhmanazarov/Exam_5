import React from "react";
import { MainButton } from "../../../../allComponents/button/main-button";
import { RightArrow } from "../../../../assets/icons/right-arrow";

export const NewsMainCard = ({
  img,
  icon: Icon,
  name,
  title,
  text,
  date,
  month,
}) => {
  return (
    <div className="max-w-[700px] w-[100%] relative">
      <div>
        <img src={img} alt="image" />
        <div className="w-[82px] h-[82px] absolute top-[45px] left-[25px] pt-[15px] pb-[20px] px-[23px] bg-white rounded-[50%] text-center">
          <p className=" font-Roboto text-[20px] font-extrabold text-primary"> {date}</p>
          <p className=" font-Roboto text-[20px] font-extrabold text-primary">{month}</p>
        </div>
      </div>
      <div className=" absolute top-[265px] shadow-usual left-[31px] max-w-[615px] w-[100%] bg-white rounded-[33px] pt-[46px] px-[57px] pb-[60px]" >
        <div className="flex items-center gap-2 mb-4" >
          <div>
            <Icon />
          </div>
          <p className=" font-Roboto text-[18px] font-normal text-primary">
            {name}
          </p>
        </div>
        <h3 className=" font-Roboto text-[25px] font-extrabold text-primary">
          {title}
        </h3>
        <p className=" font-Roboto text-[18px] font-normal text-cityRain max-w-[440px] w-[100%] mb-4">
          {text}
        </p>
        <MainButton variant={"primary"} type={'submit'}  > Read More
        <RightArrow/>
        </MainButton>
      </div>
    </div>
  );
};
