import Link from "next/link";

function ProductCard(id, title, price) {
  return (
    <>
      <h2>{title}</h2>
      <p>{price}</p>
    </>
  );
}
export default ProductCard;
