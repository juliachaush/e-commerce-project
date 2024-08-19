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
        linkName={{ products: "catalog", contacts: "contacts" }}
      />

      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <h2 className="text-white">Products page</h2>
      <Suspense fallback={<Loading />}>
        <ProductCards />
      </Suspense>
    </>
  );
}

export default ProductsPage;
