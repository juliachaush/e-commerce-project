"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { PopupWithEmail } from "./PopupWithEmail";
import soap from "../assets/soap.jpg";
import plates from "../assets/plates.jpg";
import pottery from "../assets/pottery.jpg";
import { ProductSaleCard } from "./ProductSaleCard";
import { revealOnScroll } from "../lib/scrollEffects";

export const MainPageContent = ({ products }) => {
  useEffect(() => {
    revealOnScroll();
  }, []);
  return (
    <div>
      <div className=" container mx-auto max-w-80xl mt-20 ">
        <p className=" uppercase flex justify-center font-bold ">sale</p>
        <ProductSaleCard products={products} />
      </div>
      <div className=" container mx-auto max-w-80xl  mt-10 mb-10 grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-4  lg:mt-20 md:mt-20">
        <div className=" grid  grid-rows-1  pr-10 ">
          <h2>SHOP BY CATEGORY</h2>
          <p className="text-sm">
            There are those objects that, once you know they exist, they become
            an obsession. We want them to fill our daily lives with their
            beauty, their audacity, their history. Surrounding yourself with
            them is a statement. They embody what moves us. Base Code is the
            gallery of these temptations.
          </p>
        </div>
        <Image
          src={pottery}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50 w-full h-full reveal-on-scroll transition-opacity opacity-0 "
        />
        <Image
          src={plates}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50 w-full h-full reveal-on-scroll transition-opacity opacity-0"
        />
      </div>

      <div className=" container mx-auto max-w-80xl grid  lg:col-span-2 lg:gap-10 md:gap-0  sm:gap-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-rows-2 lg:mt-20 lg:mb-20 ">
        <div className="lg:row-span-2  md:row-span-2  sm:row-span-3 col-span-1 bg-light-yellow p-20">
          <Image
            src={soap}
            alt="Photo wit candle"
            width={600}
            height={600}
            quality={100}
            className="mt-50 row-span-2 reveal-on-scroll transition-opacity opacity-0 "
          />
        </div>
        <div>
          <p className="text-lg">
            We believe that beauty and integrity are one and the same.
          </p>
          <p className="text-lg">
            Advene is a New York City-based accessories brand with a new vision
            for responsible luxury.
          </p>
        </div>
        <div className=" mt-20 lg:self-end md:self-end sm:self-center">
          <button>Read more about</button>
        </div>
      </div>

      <PopupWithEmail />
      <Footer />
    </div>
  );
};
