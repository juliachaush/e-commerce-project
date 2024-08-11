const apiUrl =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_DEV_API_PATH
    : process.env.NEXT_PUBLIC_PROD_API_PATH;

async function fetchProducts() {
  try {
    const response = await fetch(`${apiUrl}/products`, {
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
  }
}

export default fetchProducts;
