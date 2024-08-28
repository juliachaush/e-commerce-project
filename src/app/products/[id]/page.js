import { fetchProductById } from "@/src/lib/products";
import { MainHeader } from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";
import { ProductCardPage } from "@/src/components/ProductCardPage";
import Wrapper from "@/src/components/Wrapper";

export default async function ProductPage({ params, onClick }) {
  const { id } = params;

  const product = await fetchProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <Wrapper>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        logIn={{ path: "/login", name: "Log In" }}
        cart={{ path: "/cart", name: "Cart" }}
      />

      <ProductCardPage product={product} onClick={onClick} />
      <Footer />
    </Wrapper>
  );
}
