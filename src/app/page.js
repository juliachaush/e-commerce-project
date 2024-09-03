import { fetchSaleProducts } from "../lib/products";
import Image from "next/image";
import mainPotteryPhoto from "../assets/mainpottery.jpg";
import Wrapper from "../components/Wrapper";
import MainPageContent from "../components/mainPageContent";
import { MainHeader } from "../components/MainHeader";

export default async function Home() {
  const products = await fetchSaleProducts();

  return (
    <main>
      <Wrapper>
        <div className="fixed top-0 left-0 w-full  z-10 ">
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
