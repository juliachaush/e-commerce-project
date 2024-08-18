import MainHeader from "../components/MainHeader";

export default function Home() {
  return (
    <main>
      <MainHeader
        path={{ products: "/products", contacts: "/contacts" }}
        linkName={{ products: "catalog", contacts: "contacts" }}
      />
    </main>
  );
}
