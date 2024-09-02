import { MainHeader } from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";

function Contacts() {
  return (
    <>
      <MainHeader
        path={{ products: "/products" }}
        linkName={{ products: "Catalog" }}
        logIn={{ path: "/login", name: "Log In" }}
        cart={{ path: "/cart", name: "Cart" }}
      />

      <h1>About us</h1>

      <Footer />
    </>
  );
}
export default Contacts;
