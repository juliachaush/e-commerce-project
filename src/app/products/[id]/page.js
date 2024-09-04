import { fetchProductById } from "@/src/lib/products";
import { MainHeader } from "@/src/components/MainHeader";
import { Footer } from "@/src/components/Footer";
import { ProductCardPage } from "@/src/components/ProductCardPage";
import Wrapper from "@/src/components/Wrapper";

export async function generateMetadata({ params }) {
  const { id } = params;
  const product = await fetchProductById(id);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Product Details",
        item: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
      },
    ],
  };

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
      openGraph: {
        title: "Product Not Found",
        description: "The requested product could not be found.",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/not-found`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "Product Not Found",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/not-found`,
        description: "The requested product could not be found.",
      },
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/not-found`,
      },
      structuredData: {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Product Not Found",
        image: "summary_large_image",
        description: "The requested product could not be found.",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: "product price not be found.",
          availability: "https://schema.org/InStock",
        },
      },
      breadcrumb: breadcrumbSchema,
    };
  }

  return {
    title: `${product[0].product_title} - Product Details`,
    description: `Find out more about ${product[0].product_title}. Available for $${product[0].product_price}.`,
    openGraph: {
      type: "website",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
      title: `${product[0].product_title} - Product Details`,
      description: `Find out more about ${product[0].product_title}. Available for $${product[0].product_price}.`,
      site_name: "Base Code",
      locale: "en_US",
      images: [
        {
          url: product[0].image_url,
          width: 800,
          height: 600,
          alt: product[0].product_title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${product[0].product_title} - Product Details`,
      description: `Find out more about ${product[0].product_title}. Available for $${product[0].product_price}.`,
      images: [product[0].image_url],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: product[0].product_title,
      image: product[0].image_url,
      description: `Find out more about ${product[0].product_title}. Available for $${product[0].product_price}.`,
      offers: {
        "@type": "Offer",
        priceCurrency: "USD",
        price: product[0].product_price,
        availability: "https://schema.org/InStock",
      },
    },
    breadcrumb: breadcrumbSchema,
  };
}

export default async function ProductPage({ params, onClick }) {
  const { id } = params;

  const product = await fetchProductById(id);
  console.log("productfjdfjfjf", product);

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
