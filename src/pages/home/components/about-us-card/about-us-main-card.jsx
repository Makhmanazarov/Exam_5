import React from "react";

export const AboutUsMainCard = ({ img, title, name,nameClass,titleClass}) => {
  return (
    <div className="relative">
      <img src={img} alt="image" />
      <div className=" absolute z-10 top-[110px] left-[55px] max-w-[270px] w-[100%]">
        <p className={nameClass}>
          {name}
        </p>
        <h2 className={titleClass}>
          {title}
        </h2>
      </div>
    </div>
  );
};
