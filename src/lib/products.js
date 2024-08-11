const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log(apiUrl);

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
