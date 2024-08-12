// const apiUrl = process.env.API_PATH;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3001";

async function fetchProducts() {
  try {
    const response = await fetch(`${baseUrl}/api/products`, {
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
