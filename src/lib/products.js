async function fetchProducts() {
  try {
    const response = await fetch("/api/products", {
      mode: "no-cors",
    });

    // Проверяем, успешен ли запрос
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    // Получаем данные в формате JSON
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
  }
}

export default fetchProducts;
