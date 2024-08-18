const fetchProducts = async () => {
  try {
    const response = await fetch(`/api/products`, {
      mode: "no-cors",
      method: "GET",
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
};

const fetchProductById = async (id) => {
  try {
    const response = await fetch(`/api/products?id=${encodeURIComponent(id)}`, {
      mode: "no-cors",
      method: "GET",
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
};

export { fetchProducts, fetchProductById };
