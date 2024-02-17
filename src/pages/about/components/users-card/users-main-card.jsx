import React from "react";

export const UsersMainCard = ({
  img,
  name,
  job,
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
}) => {
  return (
    <div className="max-w-[450px] w-[100%] rounded-[30px] group " >
      <div>
        <img src={img} alt="image" />
      </div>
      <div className="py-[35px] px-[28px] bg-doctor group-hover:bg-white group-hover:shadow-usual transition-all duration-500 rounded-b-[30px] " >
        <h3 className=" font-Roboto font-extrabold text-[25px] text-primary" >{name}</h3>
        <div className=" flex items-center justify-between" >
          <p className="font-Yellowtail font-normal text-[22px] text-padua" >{job}</p>
          <div className=" flex items-center gap-[17px]" >
            <div>
              <Icon1 />
            </div>
            <div>
              <Icon2 />
            </div>
            <div>
              <Icon3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
