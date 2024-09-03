function ProductSkeleton() {
  return (
    <div className="relative  animate-pulse mt-4 p-2 ">
      <div className="aspect-square w-full h-1000   overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-1000"></div>
      <div className="h-6 w-600 bg-gray-200 m-4"></div>
      <div className="h-6 w-600 bg-gray-200 m-4"></div>
    </div>
  );
}
export { ProductSkeleton };
