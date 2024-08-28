import { fetchProducts } from "@/src/lib/products";

import { MainHeader } from "../../components/MainHeader";
import { Footer } from "@/src/components/Footer";
import { ProductsPageContent } from "@/src/components/ProductsPageContent";
import Wrapper from "@/src/components/Wrapper";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <Wrapper>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        logIn={{ path: "/login", name: "Log In" }}
        cart={{ path: "/cart", name: "Cart" }}
      />

      <ProductsPageContent data={products} />
      <Footer />
    </Wrapper>
  );
}
