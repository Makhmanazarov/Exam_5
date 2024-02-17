import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products-data";
import { MainButton } from "../../allComponents/button/main-button";
import { RightArrow } from "../../assets/icons/right-arrow";
import { Hero } from "../../allComponents/hero/hero";
import img from "../../assets/img/shop-single-bg-img.jpeg";
import { Card } from "../../allComponents/card/card";

export const ShopMainSingle = () => {
  const { id } = useParams();
  const data = products.find((item) => item.id == id);
  return (
    <main>
      <Hero title={"Shop Single"} img={img} />
      <section className="pt-[114px] pb-[180px]">
        <div className="container">
          <div className="flex items-center justify-center gap-[83px] mb-[80px]">
            <div className="p-[50px] relative px-[60px] w-[600px] bg-doctor rounded-[24px] ">
              <img className="w-[500px] h-[500px]" src={data.img} alt="image" />
              <p className=" absolute top-10 left-[35px] py-1 px-3 rounded-[8px] bg-primary text-white font-Roboto inline-block text-[15px] font-bold ">
                {data.category}
              </p>
            </div>
            <div>
              <h1 className=" font-Roboto font-semibold text-[40px] text-primary mb-2">
                {data.name}
              </h1>
              <div className="mb-2">{data.icon()}</div>
              <div className="flex items-center gap-2 mb-[30px]">
                <p className="font-Roboto font-semibold text-[20px] text-fortressGrey line-through ">
                  {data.oldPrice}
                </p>
                <p className="font-Roboto font-bold text-[25px] text-primary">
                  {data.price}
                </p>
              </div>
              <div className="max-w-[645px] mb-[35px]">
                <p className=" font-Roboto font-normal text-[18px]  text-cityRain">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="flex items-center gap-[21px]">
                <p className=" font-Roboto font-bold  text-[20px] text-primary">
                  Quantity :
                </p>
                <div className=" py-[24px] px-[61px] border-solid border-[2px] border-primary rounded-[16px] inline-block">
                  <p className="font-Roboto font-bold  text-[20px] text-primary">
                    1
                  </p>
                </div>
                <MainButton variant={"secondary"} type={"submit"}>
                  Add To Cart
                  <RightArrow />
                </MainButton>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex items-center justify-center gap-[20px] mb-[27px]" >
              <MainButton variant={"secondary"} type={"button"}>
                Product Description
              </MainButton>
              <MainButton variant={"fourthDegree"} type={"button"}>
                Additional Info
              </MainButton>
            </div>
            <div className="max-w-[1110px] text-center ml-auto mr-auto" >
              <p className=" font-Roboto font-normal text-[18px] text-cityRain" >
                Welcome to the world of natural and organic. Here you can
                discover the bounty of nature. We have grown on the principles
                of health, ecology, and care. We aim to give our customers a
                healthy chemical-free meal for perfect nutrition. It offers
                about 8–10% carbs. Simple sugars — such as glucose and fructose
                — make up 70% and 80% of the carbs in raw.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-[150px]" >
        <div className="container">
            <h2 className=" font-Roboto font-extrabold text-[50px] text-primary text-center mb-10">Related Products</h2>
            <div className="flex items-start justify-center gap-[20px]" >
                {products.slice(0,4).map((item) => (
                    <Card key={item.id} {...item} />
                ))}
            </div>
        </div>
      </section>
    </main>
  );
};
