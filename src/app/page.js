import MainHeader from "../components/MainHeader";
import mainPhoto from "../assets/main.jpg";
import candles from "../assets/candles.webp";
import plates from "../assets/plates.webp";
import bathroom from "../assets/bathroom.webp";
import Image from "next/image";
import { Footer } from "../components/Footer";
import PopupWithEmail from "../components/PopupWithEmail";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full  z-10">
        <MainHeader
          path={{ products: "/products", contacts: "/contacts" }}
          linkName={{ products: "Catalog", contacts: "Contacts" }}
          // cart={{ path: "/cart", name: "Cart" }}
          logIn={{ path: "/login", name: "Log In" }}
        />
      </div>
      <div className="relative w-screen h-screen">
        <Image
          src={mainPhoto}
          alt="Photo wit candle"
          // layout="fill"
          // objectFit="cover"
          quality={100}
          className="mt-50 object-cover w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center text-white justify-center text-center tracking-widest ">
        <p>SPRING/SUMMER 2024</p>
      </div>
      <div className=" lg:col-span-4 mt-10 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0  lg:mt-20 md:mt-20">
        <div className=" grid grid-cols-1 grid-rows-1 pl-10 pr-10 ">
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
          src={candles}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50"
        />
        <Image
          src={plates}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50"
        />
        <Image
          src={bathroom}
          alt="Photo wit candle"
          width={400}
          height={400}
          quality={100}
          className="mt-50"
        />
      </div>
      <PopupWithEmail />
      <Footer />
    </main>
  );
}
