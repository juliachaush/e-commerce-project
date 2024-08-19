import { Suspense } from "react";
import { ProductCards } from "@/src/components/ProductCard";
import { Breadcrumbs } from "@/src/components/Breadcrumbs";
import Loading from "../loading";
import MainHeader from "@/src/components/MainHeader";

function ProductsPage() {
  const breadCrumbs = [{ name: "home", url: "/" }];

  return (
    <>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        cart={{ path: "/cart", name: "Cart" }}
      />

      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <Suspense fallback={<Loading />}>
        <ProductCards />
      </Suspense>
    </>
  );
}

export default ProductsPage;
