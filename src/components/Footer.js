import Link from "next/link";
import { Input } from "./Input";

const Footer = () => {
  return (
    <>
      <div className="flex flex-row bg-white text-black  items-center spa justify-between border-b border-gray-950 tracking-widest " />
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0">
        <div className="lg:col-span-2 grid grid-cols-1 mt-4">
          <Link href={`/products`} className="flex items-center pl-4">
            SHOP ALL
          </Link>
          <Link href={`/contacts`} className="flex items-center pl-4">
            CONTACT US
          </Link>
        </div>
        <div class="border-l border-gray-950  md:border-l lg:border-l  " />
        <div className="mt-4 mr-8 ">
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
