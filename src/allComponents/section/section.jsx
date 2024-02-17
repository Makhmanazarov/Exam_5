import React from "react";
import img from "../../assets/img/section-bg.png";
import { MainButton } from "../button/main-button";

export const MainSection = () => {
  return (
    <section>
      <div className="container">
        <div
          className="bg-cover rounded-[32px] max-w-[1400px] w-[100%] ml-auto mr-auto bg-no-repeat bg-center py-[105px] px-[75px] "
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className=" flex items-center justify-between" >
          <div className="max-w-[357px] w-[100%]">
            <h2 className=" font-Roboto text-[50px] leading-0 font-extrabold text-white" >Subscribe to our Newsletter</h2>
          </div>
            <div className=" max-w-[550px] w-[100%] flex items-center gap-[6px]  " >
              <input className="w-[60%]  rounded-[16px] placeholder:font-Roboto text-[18px] font-medium text-dhusarGrey italic outline-none py-[26px] px-[28px]" type="email" placeholder="Your Email Address" />
              <MainButton variant={'secondary'} type={'submit'} >Subscribe</MainButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
