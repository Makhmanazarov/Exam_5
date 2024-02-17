import React from "react";
import { Link } from "react-router-dom";

export const Card = ({id, img, name, oldPrice, price, icon: Icon, category }) => {
  return (
    <Link to={`/shop-main-single/${id}`} >
    <div className=" max-w-[335px]  w-[100%] relative bg-doctor pt-[30px] pr-[26px] pb-[17px] pl-[30px] rounded-[30px] group transition-all duration-300 hover:shadow-usual" >
      <button className=" py-1 px-3 rounded-[8px] bg-primary text-white font-Roboto text-[15px] font-bold"  type="button">{category}</button>
      <div className=" my-[30px]">
        <img className="object-cover w-[335px] h-[325px] transition-all duration-500 group-hover:scale-[.8] " src={img} alt="image" />
      </div>
      <h3 className=" text-[20px] mb-[13px] font-Roboto font-bold text-primary" >{name}</h3>
      <div className=" border-solid border-t-[1px] border-silverLake pt-[6px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className=" font-Roboto font-bold text-[15px] text-fortressGrey line-through" >{oldPrice}</p>
          <p className=" font-Roboto font-bold text-[18px] text-primary" >{price}</p>
        </div>
        <div><Icon/></div>
      </div>
    </div>
    </Link>
  );
};
