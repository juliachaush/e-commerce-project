const fetchProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error during request:", error);
    return null;
  }
};

export default fetchProducts;
