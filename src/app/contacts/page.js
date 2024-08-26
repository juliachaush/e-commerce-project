import MainHeader from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";

function Contacts() {
  return (
    <>
      <MainHeader
        path={{ products: "/products" }}
        linkName={{ products: "Catalog" }}
        // cart={{ path: "/cart", name: "Cart" }}
      />

      <h1>Contacts</h1>

      <Footer />
    </>
  );
}
export default Contacts;
