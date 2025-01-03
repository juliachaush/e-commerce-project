import fetchSaleProducts from "../services/fetchSaleProducts";
import Image from "next/image";
// import mainPotteryPhoto from "../../public/mainpottery";
import Wrapper from "../components/Wrapper";
import { MainPageContent } from "../components/MainPageContent";
import { Suspense } from "react";

export default async function Home() {
  const products = await fetchSaleProducts();

  return (
    <main>
      <Wrapper>
        <div className="relative w-screen h-screen">
          <Image
            src="/mainpottery.jpg"
            alt="Photo wit candle"
            priority={true}
            width={800}
            height={600}
            quality={65}
            className="lg:mt-50 object-cover w-full h-full "
          />
        </div>
        <div className="absolute inset-0 flex items-center text-black justify-center text-center tracking-widest ">
          <p>SPRING/SUMMER 2024</p>
        </div>

        <MainPageContent products={products} />
      </Wrapper>
    </main>
  );
}
