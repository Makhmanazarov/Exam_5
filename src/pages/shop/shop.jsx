import React from "react";
import bgImg from "../../assets/img/shops-bg-img.png";
import { Hero } from "../../allComponents/hero/hero";
import { products } from "../../data/products-data";
import { Card } from "../../allComponents/card/card";

export const Shop = () => {
  const res = products.splice(8, 4);
  return (
    <main>
      <Hero title={"Shops"} img={bgImg} />
      <section className="pt-[90px] pb-[120px]">
        <div className="container">
          <div className=" flex items-start justify-center gap-[20px] flex-wrap " >
            {products.map((i) => {
              return <Card key={i.id} {...i} />;
            })}
          </div>
        </div>
      </section>
    </main>
  );
};
