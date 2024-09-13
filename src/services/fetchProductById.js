const fetchProductById = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Ошибка при запросе:", error);
  }
};

export default fetchProductById;
