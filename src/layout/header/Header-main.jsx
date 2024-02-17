import React from "react";
import { headerData } from "./header-data";
import { NavLink } from "react-router-dom";
import { Logo } from "../../assets/icons/logo";
import { Bucket } from "../../assets/icons/bucket";
import { Search } from "../../assets/icons/search";

export const Header = () => {
  return (
    <header className="py-[69px]">
      <div className="container">
        <div className=" flex items-center justify-between ">
          <div className="flex items-center gap-[150px]" >
            <div>
              <Logo />
            </div>
            <div className="flex items-center gap-[30px]">
              {headerData.map((item) => (
                <div key={item.id}>
                  <NavLink
                    className={" font-Roboto font-bold text-primary"}
                    to={item.path}
                  >
                    {item.name}
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-[18px]" >
                <div className="w-[380px] relative" >
                  <input type="text" className="w-[100%] bg-drWhite py-[20px] pr-[70px] pl-[20px] outline-none font-Roboto text-[18px] font-medium text-dhusarGrey rounded-[36px]" />
                  <button type="submit" className=" absolute top-[5px] right-[6px] w-[56px] h-[56px] rounded-[50%] bg-secondary flex items-center justify-center" ><Search/></button>
                </div>
          <div className="flex items-center w-[160px] gap-3 border-solid border-[1px]  border-christmasSilver pt-[3px] pr-[23px] pb-[5px] pl-[6px] rounded-[33px]" >
            <button type="button" className=" cursor-pointer w-[56px] h-[56px] bg-primary rounded-[50%] flex items-center justify-center" >
                <Bucket/>
            </button >
            <p className=" text-primary font-Roboto font-semibold" >Cart (0)</p>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};
