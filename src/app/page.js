import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <main>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "Catalog", contacts: "Contacts" }}
        cart={{ path: "/cart", name: "Cart" }}
      />
    </main>
  );
}
