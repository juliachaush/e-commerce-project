export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (!serializedState) {
      return undefined;
    }
    const parsedState = JSON.parse(serializedState);

    return { cart: parsedState };
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};
