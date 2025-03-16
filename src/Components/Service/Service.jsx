import { useEffect, useState } from "react";
import React from "react";
import useService from "../Hooks/useService";
import { v4 as uuidv4 } from "uuid";
import { ShimmerPostList } from "react-shimmer-effects";
import ServiceCard from "../ServiceCard/ServiceCard";
const Service = () => {
  const { isLoading, data } = useService();

  if (isLoading) {
    return (
      <>
        <div className="2xl:container mx-auto p-40 mt-[30px]">
          <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
        </div>
      </>
    );
  }

  return (
    <>
      <div className="2xl:container mx-auto py-10 mt-[30px]">
        <div>
          <p className="font-[Inter] font-bold text-[40px] leading-[42px] text-yellow-500 text-center p-8">
            Our Services
          </p>
        </div>

        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((items) => {
            return (
              <ServiceCard
                key={uuidv4()}
                id={items.id}
                product_image={items.productimage}
                product_title={items.producttitle}
                product_rating={items.rating}
                product_price={items.price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
