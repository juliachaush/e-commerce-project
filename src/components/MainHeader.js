import Link from "next/link";

function MainHeader() {
  return (
    <>
      <h1>Base Code</h1>

      <Link href="/products">Catalog</Link>
      <Link href="/contacts">Contacts</Link>
    </>
  );
}
export default MainHeader;
