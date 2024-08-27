import Link from "next/link";
import { Input } from "./Input";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-white text-black  items-center spa justify-between border-b border-gray-950 tracking-widest " />
      <div className=" grid grid-cols-[1fr_1fr]  grid-rows-[1fr]  gap-0">
        <div className=" column-start-1 row-start-1  mt-4 ml-8 ">
          <div className="grid grid-rows-[1fr_1fr_1fr] gap-4 ">
            <Link href={`/products`}>SHOP ALL</Link>
            <Link href={`/contacts`}>CONTACT US</Link>
            <Link href={`https://www.instagram.com/basecode.store/`}>
              INSTAGRAM
            </Link>
          </div>
        </div>
        <div className="border-l border-gray-950  md:border-l lg:border-l  " />
        <div className=" column-start-2 row-start-1  mt-4 ml-8 ">
          <h2 className="mb-4">STAY IN THE LOOP</h2>
          <p className="mb-2">
            Subscribe to receive free shipping on your next order (and the
            occasional Base Code update).
          </p>
          <Input />
        </div>
      </div>
      <div className="flex flex-row bg-white text-black mb-2 items-center spa justify-between border-b border-gray-950 tracking-widest " />
    </>
  );
};
export { Footer };
