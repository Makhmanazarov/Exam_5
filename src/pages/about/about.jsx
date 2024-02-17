import React from "react";
import { Hero } from "../../allComponents/hero/hero";
import aboutUsImg from "../../assets/img/about-us-hero-img.png";
import { aboutUsSecData, aboutUsSecData2 } from "./component-data/about-us-sec";
import { AboutUsSecMiniMainCard } from "./components/about-us-sec-mini-card/about-us-sec-mini-main-card";
import { MainButton } from "../../allComponents/button/main-button";
import { RightArrow } from "../../assets/icons/right-arrow";
import { ourWorkData, ourWorkData2 } from "./component-data/our-work";
import { OurMainWork } from "./components/our-work/our-main-work";
import { teamData, teamUsersData } from "./component-data/team-sec";
import { UsersMainCard } from "./components/users-card/users-main-card";
import { offerSecData } from "./component-data/offer-sec-data";
import { OfferMainItem } from "./components/offer-item/offer-main-item";

export const About = () => {
  return (
    <main>
      <Hero title={"About Us"} img={aboutUsImg} />
      <section>
        <div className="container">
          {aboutUsSecData.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-center gap-[50px]"
            >
              <div>
                <img className="" src={item.img} alt="" />
              </div>
              <div className="max-w-[640px] w-[100%]">
                <div className="max-w-[500px] w-[100%]">
                  <p className=" font-Yellowtail font-normal text-[36px] text-padua mb-2">
                    {item.name}
                  </p>
                  <h2 className="font-Roboto text-[50px] font-extrabold text-primary mb-[14px]">
                    {item.title}
                  </h2>
                </div>
                <p className="font-Roboto text-[18px] font-normal text-cityRain mb-[25px]">
                  {item.dec1}
                </p>
                <p className="font-Roboto text-[18px] font-normal text-cityRain mb-[50px]">
                  {item.dec2}
                </p>
                <div className="flex items-center gap-[65px] mb-[60px]">
                  {aboutUsSecData2.map((item) => (
                    <AboutUsSecMiniMainCard
                      key={item.id}
                      icon={item.icon}
                      title={item.title}
                    />
                  ))}
                </div>
                <MainButton variant={"secondary"} type={"submit"}>
                  Explore More
                  <RightArrow />
                </MainButton>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-[190px]  bg-doctor ">
        <div className="container">
          <div>
          {ourWorkData.map((item) => (
            <div key={item.id} className="flex items-center justify-center gap-[50px] mb-[90px]" >
              <div className="max-w-[640px] w-[100%]" >
                <div className="max-w-[525px] w-[100%]" >
                  <p className=" font-Yellowtail font-normal text-[36px] text-padua mb-[6px]" >{item.name}</p>
                  <h2 className="font-Roboto text-[50px] font-extrabold text-primary mb-[25px]" >{item.title}</h2>
                </div>
                <p className="font-Roboto text-[18px] font-normal text-cityRain mb-[36px]" >{item.dec}</p>
                <div className=" w-[340px] flex items-center gap-2 py-[29px] pr-[91px] pl-[27px] rounded-[50px] mb-3 bg-coronation"  >
                  {item.icon()}
                  <p className=" font-Roboto text-[20px] font-medium text-primary" >{item.protect1}</p>
                </div>
                <p className="w-[440px] font-Roboto text-[18px] font-normal text-cityRain mb-[24px] ml-[60px] " >{item.protect1Dec}</p>
                <div className=" w-[340px] flex items-center gap-2 py-[29px] pr-[91px] pl-[27px] rounded-[50px] mb-3 bg-coronation">
                  {item.icon()}
                  <p className="font-Roboto text-[20px] font-medium text-primary" >{item.protect2}</p>
                </div>
                <p className="w-[440px] font-Roboto text-[18px] font-normal text-cityRain mb-[24px] ml-[60px]" >{item.protect2Dec}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
          </div>
          <div className="flex items-start justify-center gap-[30px]" >
            {ourWorkData2.map((i) => (
              <OurMainWork key={i.id} {...i} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-[177px] pb-[200px]" >
        <div className="container">
          <div>
            {teamData.map((i) => (
              <div key={i.id}>
                <p className="font-Yellowtail font-normal text-[36px] text-padua text-center" >{i.name}</p>
                <h2 className="font-Roboto text-[50px] font-extrabold text-primary mb-[16px] text-center" >{i.title}</h2>
                <p className="font-Roboto text-[18px] font-normal text-cityRain w-[850px] text-center ml-auto mr-auto mb-10" >{i.dec}</p>
              </div>
            ))}
          </div>
          <div className="flex items-start justify-center gap-[25px]" >
            {teamUsersData.map((item) => (
              <UsersMainCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-primary py-[188px] mb-[150px]" >
        <div className="container">
          <p className="font-Yellowtail font-normal text-[36px] text-padua text-center mb-2">About Us</p>
          <h2 className="font-Roboto text-[50px] font-extrabold text-white mb-8 text-center " >What We Offer for You</h2>
          <div className="flex items-start justify-center gap-[20px]">
            {offerSecData.map((item) => (
              <OfferMainItem key={item.id} img={item.img} title={item.title} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
