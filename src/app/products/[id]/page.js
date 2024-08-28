import { fetchProductById } from "@/src/lib/products";
import { Breadcrumbs } from "@/src/components/BreadCrumbs";
import { MainHeader } from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";
import { ProductCardPage } from "@/src/components/ProductCardPage";
import Wrapper from "@/src/components/Wrapper";

const breadCrumbs = [
  { name: "home", url: "/" },
  { name: "products", url: "/products" },
];

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
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <ProductCardPage product={product} onClick={onClick} />
      <Footer />
    </Wrapper>
  );
}
