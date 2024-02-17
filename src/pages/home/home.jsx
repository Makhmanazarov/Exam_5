import React from"react";
import { MainButton } from "../../allComponents/button/main-button";
import img from "../../assets/img/hero-bg.jpg";
import img2 from "../../assets/img/testimonial-bg-img.png";
import img3 from "../../assets/img/eco-friendly-img.png";
import aboutSecImg from "../../assets/img/about-us-img.png";
import { aboutData, aboutData2, aboutData3 } from "./component-data/about-us";
import { AboutUsMainCard } from "./components/about-us-card/about-us-main-card";
import { AboutUsMiniCard } from "./components/about-us-card2/about-us-mini-card";
import { products } from "../../data/products-data";
import { Card } from "../../allComponents/card/card";
import {
  testimonialData,
  testimonialData2,
} from "./component-data/testimonial";
import { Navigation } from "../../assets/icons/navigation";
import { Rating } from "../../assets/icons/rating";
import { TestimonialMain } from "./components/testimonial-item/testimonial-main";
import { ecoFriendlyData } from "./component-data/eco-friendly";
import { advertisingData } from "./component-data/advertising";
import { AdvertisingMain } from "./components/advertising-card/advertising-main";
import { newsData } from "./component-data/news";
import { NewsMainCard } from "./components/news-card/news-main-card";
import { RightArrow } from "../../assets/icons/right-arrow";


export const Home = ({}) => {
  return (
    <main>
      <section
        style={{ backgroundImage: `url(${img})` }}
        className="py-[247px] bg-cover bg-center "
      >
        <div className="container">
          <div className="ml-[75px] max-w-[511px] w-[100%]">
            <p className=" font-Yellowtail text-[36px] font-normal text-seaLettuce mb-2">
              100% Natural Food
            </p>
            <h1 className=" font-Roboto text-[70px] font-extrabold text-primary tracking-[0%] leading-[80px]  mb-[23px] ">
              Choose the best healthier way of life
            </h1>
            <MainButton variant={"primary"} type={'submit'} >
              Explore Now 
              <RightArrow/>
            </MainButton>
          </div>
        </div>
      </section>
      <section className="pt-[145px] pb-[180px]">
        <div className="container">
          <div>
            <div className="flex items-center justify-center gap-[40px]">
              {aboutData.map((item) => (
                <div key={item.id}>
                  <AboutUsMainCard
                    img={item.img}
                    title={item.title}
                    name={item.name}
                    nameClass={item.nameClass}
                    titleClass={item.titleClass}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-doctor pt-[150px] pb-[200px]">
        <div className="container">
          <div className=" flex items-center justify-center ">
            <div>
              <img src={aboutSecImg} alt="img" />
            </div>
            <div>
              <div>
                {aboutData2.map((item) => (
                  <div
                    className=" max-w-[680px] w-[100%] mb-[46px] "
                    key={item.id}
                  >
                    <p className=" font-Yellowtail font-normal text-[36px] text-padua mb-2">
                      {item.name}
                    </p>
                    <h2 className=" font-Roboto text-[50px] font-extrabold text-primary mb-[14px]">
                      {item.title}
                    </h2>
                    <p className=" font-Roboto text-[18px] font-normal text-cityRain">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div>
                {aboutData3.map((item) => (
                  <AboutUsMiniCard
                    key={item.id}
                    name={item.name}
                    icon={item.icon}
                    text={item.text}
                  />
                ))}
              </div>
              <div className="pt-[15px]">
                <MainButton variant={"secondary"} type={'submit'} >Shop Now 
                <RightArrow/>
                </MainButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-[150px] pb-[200px]">
        <div className="container">
          <p className=" font-Yellowtail text-[36px] font-medium text-secondary text-center mb-2">
            Categories{" "}
          </p>
          <h2 className=" font-Roboto text-[50px] font-extrabold text-primary mb-10 text-center">
            Our Products
          </h2>
          <div className="flex items-start flex-wrap gap-[20px] justify-center mb-[122px]">
            {products.slice(0, 8).map((data) => (
              <Card
                key={data.id}
                {...data}
              />
            ))}
          </div>
          <div className="flex items-center justify-center">
            <MainButton variant={"secondary"} type={'submit'} > Load More 
            <RightArrow/>
            </MainButton>
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${img2})` }}
        className="py-[165px] bg-cover bg-center "
      >
        <div className="container">
          <div>
            <p className=" font-Yellowtail text-[36px] font-medium text-secondary text-center mb-2">
              Testimonial
            </p>
            <h2 className="font-Roboto text-[50px] font-extrabold text-primary mb-[55px] text-center">
              What Our Customer Saying?
            </h2>

            <div className="mb-[101px]">
              {testimonialData.map((user) => (
                <div
                  className="max-w-[780px] w-[100%] text-center ml-auto mr-auto"
                  key={user.id}
                >
                  <div className="flex items-center justify-center mb-[15px]">
                    <img src={user.img} alt="img" />
                  </div>
                  <div className="flex items-center justify-center mb-[25px]">
                    <Rating />
                  </div>
                  <p className=" font-Roboto text-[18px] font-normal text-cityRain mb-5">
                    {user.text}
                  </p>
                  <h3 className=" font-Roboto text-[25px] font-semibold text-primary">
                    {user.name}
                  </h3>
                  <p className=" font-Roboto text-[15px] font-normal text-cityRain mb-5">
                    {user.job}
                  </p>
                </div>
              ))}
              <div className=" flex items-center justify-center ">
                <Navigation />
              </div>
            </div>
            <div className="flex items-center justify-center gap-[62px] pt-[102px] border-solid border-t-[1px] border-christmasSilver max-w-[1108px] w-[100%] ml-auto mr-auto">
              {testimonialData2.map((item) => (
                <TestimonialMain key={item.id} name={item.name} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[200px] bg-primary">
        <div className="container">
          <div className="flex items-center justify-between mb-[50px]">
            <div>
              <p className=" font-Yellowtail text-[36px] font-medium text-secondary">
                Offer
              </p>
              <h2 className="font-Roboto text-[50px] font-extrabold text-white">
                We Offer Organic For You
              </h2>
            </div>
            <div>
              <MainButton variant={"primary"} type={'submit'} >View All Product 
              <RightArrow/>
              </MainButton>
            </div>
          </div>
          <div className="flex items-start justify-center gap-[20px]">
            {products.slice(8, 12).map((item) => (
              <Card
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${img3})` }}
        className="pt-[108px]  pb-[150px] w-[950px] h-[930px] bg-contain bg-no-repeat bg-left relative  "
      >
        <div className="container">
          <div className=" py-[78px] pl-[90px] h-[723px] rounded-[30px] bg-white absolute right-[-640px]" >
            <p className="font-Yellowtail text-[36px] font-medium text-secondary mb-2">Eco Friendly</p>
            <h2 className="font-Roboto text-[50px] font-extrabold text-primary max-w-[600px] w-[100%] mb-[35px]">Econis is a Friendly Organic Store</h2>

            <div>
              {ecoFriendlyData.map((item) => (
                <div key={item.id} className="max-w-[630px] w-[100%] mb-[35px] " >
                  <h3 className=" font-Roboto text-[25px] font-medium text-primary mb-2" >{item.title}</h3>
                  <p className=" font-Roboto text-[18px] font-medium text-cityRain " >{item.text}</p>
                </div> 
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-[190px] bg-peacefulRain" >
        <div className="container">
          <div className="flex items-center gap-[45px]" >
            {advertisingData.map((item) => (
              <AdvertisingMain key={item.id} img={item.img} button={item.button} />
            ))}
          </div>
        </div>
      </section>
      <section className="pt-[180px] pb-[250px]" >
        <div className="container">
          <div className="flex items-end justify-center gap-[480px] mb-[45px]" >
            <div className="max-w-[700px] w-[100%]" >
              <p className="font-Yellowtail text-[36px] font-medium text-secondary mb-2" >News</p>
              <h2 className="font-Roboto text-[50px] font-extrabold text-primary " >Discover weekly content about organic food, & more</h2>
            </div>
            <MainButton variant={'tertiary'} type={'submit'}  >More News 
              <RightArrow/>
            </MainButton>
          </div>
          <div className=" flex items-start justify-center gap-[20px]" >
            {newsData?.map((item) => (
              <NewsMainCard key={item.id} {...item}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
