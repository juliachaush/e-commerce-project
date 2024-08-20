import MainHeader from "@/src/components/mainHeader";

function Contacts() {
  return (
    <>
      <MainHeader
        path={{ products: "/products" }}
        linkName={{ products: "Catalog" }}
        cart={{ path: "/cart", name: "Cart" }}
      />

      <h1>Contacts</h1>
    </>
  );
}
export default Contacts;
