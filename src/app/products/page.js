import fetchProducts from "@/src/services/fetchProducts";

import { Footer } from "@/src/components/Footer";
import { ProductsPageContent } from "@/src/components/ProductsPageContent";
import Wrapper from "@/src/components/Wrapper";

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <Wrapper>
      <ProductsPageContent data={products} />
      <Footer />
    </Wrapper>
  );
}
