import React from "react";
import { Link } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ServiceCard = (props) => {
  const formatPrice = (num) => new Intl.NumberFormat("en-IN").format(num);

  return (
    <>
      <div
        className="transform transition duration-200 hover:scale-105 bg-white mx-auto shadow-xl
       p-6 rounded-lg border-black border h-[350px] w-[400px] "
      >
        <div className="grid sd:grid-cols-1 md:grid-cols-2 mx-auto">
          <div>
            <LazyLoadImage
              alt="Product Card image"
              effect="blur"
              className="rounded-lg mx-auto h-[60%]"
              wrapperProps={{
                style: { transitionDelay: "1s" },
              }}
              src={`${props.product_image}?timestamp=${new Date().getTime()}`}
            />
          </div>

          <div className="flex flex-col mt-3 gap-8 justify-start items-center">
            <p className="font-[Inter] font-bold text-[24px] text-center leading-[24px] text-[#183A57]">
              {props.product_title}
            </p>

            <Link
              to="https://dev.objectivefiberselection.com/signin"
              target="_blank"
            >
              <button className="flex flex-row mx-auto gap-1 fond-[Roboto] font-medium text-[16px] leading-[21px] rounded-lg p-2 bg-[#BDA000] text-white">
                Get started
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <button className=" fond-[Roboto] font-normal text-[20px] leading-[28px] text-black">
            Description - {props.product_description}
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
