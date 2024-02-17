import React from "react";
import { footerData1, footerData2 } from "./footer-data";
import { Logo } from "../../assets/icons/logo";
import { Instagram } from "../../assets/icons/instagram";
import { Facebook } from "../../assets/icons/facebook";
import { Twitter } from "../../assets/icons/twitter";
import { Pinterest } from "../../assets/icons/pinterest";

export const Footer = () => {
  console.log();
  return (
    <footer className="pt-[100px]">
      <div className="pb-[100px]" >
        <div className="container">
          <div>
            <ul className=" flex items-start justify-center gap-[41px]">
              <li className=" text-right pr-[50px] border-solid border-r-[1px] border-christmasSilver">
                <p className=" font-Roboto text-[30px] font-bold text-primary mb-8">
                  Contact Us
                </p>
                {footerData1.map((item) => (
                  <div className="mb-5" key={item.id}>
                    <h2 className=" text-cityRain font-Roboto  text-[18px]  font-semibold mb-[5px] ">
                      {item.name}
                    </h2>
                    <p className=" text-cityRain font-Roboto  text-[18px] font-normal ">
                      {item.text}
                    </p>
                  </div>
                ))}
              </li>
              <li>
                <div className="flex items-center justify-center mb-[26px]">
                  <Logo />
                </div>
                <p className=" max-w-[520px] mb-[50px] w-[100%]  text-cityRain font-Roboto  text-[18px] font-normal text-center ">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum simply dummy text of the printing{" "}
                </p>
                <div className="flex items-center justify-center gap-[15px]">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-heavySugar rounded-[50%]">
                    <Instagram />
                  </div>
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-heavySugar rounded-[50%]">
                    <Facebook />
                  </div>
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-heavySugar rounded-[50%]">
                    <Twitter />
                  </div>
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-heavySugar rounded-[50%]">
                    <Pinterest />
                  </div>
                </div>
              </li>
              <li className="pl-[50px] border-solid border-l-[1px] border-christmasSilver">
                <p className=" font-Roboto text-[30px] font-bold text-primary mb-8">
                  Utility Pages
                </p>
                {footerData2.map((item) => (
                  <div key={item.id}>
                    <p className=" text-cityRain font-Roboto  text-[18px] font-normal mb-5 ">
                      {item.title}
                    </p>
                  </div>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="py-[17px] border-solid border-t-[1px] border-christmasSilver" >
        <div className="container">
          <p  className=" text-center text-cityRain font-Roboto  text-[18px]  font-normal">
            Copyright ©{" "}
            <span className=" text-cityRain font-Roboto  text-[18px]  font-semibold">
              Organick
            </span>{" "}
            | Designed by{" "}
            <span className=" text-cityRain font-Roboto  text-[18px]  font-semibold">
              VictorFlow
            </span>{" "}
            Templates - Powered by{" "}
            <span className=" text-cityRain font-Roboto  text-[18px]  font-semibold">
              Webflow
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};
