import React, { Children } from "react";
import { RightArrow } from "../../assets/icons/right-arrow";

export const MainButton = ({ variant,type, children}) => {
  let buttonClassName =
    "py-[28px] px-[39px]  rounded-[16px] flex items-center gap-[10px] font-Roboto text-5 font-bold";
    if (variant === 'primary') {
      buttonClassName += ' bg-arapawa text-primary'
    }else if (variant === 'secondary'){
      buttonClassName += ' bg-primary text-white'
    }else if(variant === 'tertiary'){
      buttonClassName += ' border-solid border-[1px] border-primary'
    }else if(variant === 'fourthDegree'){
      buttonClassName += ' bg-heavySugar'
    }
  return (
    <button  type={type} className={buttonClassName} > {children}
    </button>
  );
};
