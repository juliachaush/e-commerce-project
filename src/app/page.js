import fetchSaleProducts from "../services/fetchSaleProducts";
import Image from "next/image";
import mainPotteryPhoto from "../assets/mainpottery.jpg";
import Wrapper from "../components/Wrapper";
import { MainPageContent } from "../components/MainPageContent";

export default async function Home() {
  const products = await fetchSaleProducts();

  return (
    <main>
      <Wrapper>
        <div className="relative w-screen h-screen">
          <Image
            src={mainPotteryPhoto}
            alt="Photo wit candle"
            quality={100}
            className="lg:mt-50 object-cover w-full h-full "
            priority
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
