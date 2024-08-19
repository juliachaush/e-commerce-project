import MainHeader from "../components/MainHeader";
import mainPhoto from "../assets/main.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="fixed top-0 left-0 w-full  z-10">
        <MainHeader
          path={{ products: "/products", contacts: "/contacts" }}
          linkName={{ products: "Catalog", contacts: "Contacts" }}
          cart={{ path: "/cart", name: "Cart" }}
        />
      </div>
      <div className="relative w-screen h-screen">
        <Image
          src={mainPhoto}
          alt="Photo wit candle"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="mt-50"
        />
      </div>
    </main>
  );
}
