import Image from "next/image";

import { MainHeader } from "../components/MainHeader";
import { Footer } from "../components/Footer";
import { PopupWithEmail } from "../components/PopupWithEmail";

import { fetchSaleProducts } from "../lib/products";

import mainPotteryPhoto from "../assets/mainpottery.jpg";
import soap from "../assets/soap.jpg";
import plates from "../assets/plates.jpg";
import bathroom from "../assets/bathroom.webp";
import pottery from "../assets/pottery.jpg";
import { ProductSaleCard } from "../components/ProductSaleCard";

export default async function Home() {
  const products = await fetchSaleProducts();

  return (
    <main>
      <div className="fixed top-0 left-0 w-full  z-10">
        <MainHeader
          path={{ products: "/products", contacts: "/contacts" }}
          linkName={{ products: "Catalog", contacts: "About us" }}
          logIn={{ path: "/login", name: "Log In" }}
        />
      </div>
      <div className="relative w-screen h-screen">
        <Image
          src={mainPotteryPhoto}
          alt="Photo wit candle"
          quality={100}
          className="lg:mt-50 object-cover w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center text-black justify-center text-center tracking-widest ">
        <p>SPRING/SUMMER 2024</p>
      </div>

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
          className="mt-50 w-full h-full"
        />
        <Image
          src={plates}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50 w-full h-full"
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
            className="mt-50 row-span-2 "
          />
        </div>
        <div>
          <p className="text-sm">
            We believe that beauty and integrity are one and the same.
          </p>
          <p className="text-sm">
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
    </main>
  );
}
