import Link from "next/link";
// import Image from "next/image";
// import pickNext from "@/assets/next.svg";

function MainHeader() {
  return (
    <>
      <h1>Base Code</h1>
      {/* <Image src={pickNext} alt="Image" /> */}

      <Link href="/products">Catalog</Link>
      <Link href="/contacts">Contacts</Link>
    </>
  );
}
export default MainHeader;
