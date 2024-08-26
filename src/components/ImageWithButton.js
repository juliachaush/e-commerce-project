import Image from "next/image";
import { Button } from "./Button";
import Link from "next/link";

export default function ImageWithButton({ src, alt, onClick, href }) {
  return (
    <div className={`relative elative group `}>
      <Link href={href}>
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          //   objectFit="cover"
          className="rounded-lg w-full  h-full object-cover"
        />
      </Link>

      <Button
        name={"ADD TO CART"}
        onClick={onClick}
        className={
          "   bg-white text-gray-950 hover:bg-white absolute bottom-1 left-1/2 w-full h-10 transform -translate-x-1/2 -translate-y-1/2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
        }
      />
    </div>
  );
}
